import React, { useEffect, useState } from "react";
import CloseIcon from "../Icons/CloseIcon";
import Loader from "@/components/Utils/Loader";
import { ethers } from "ethers";
import useWeb3Auth from "@/hooks/useWeb3Auth";
import { usePathname } from "next/navigation";

const GiftCardModal = ({ show, dismiss, max, tfuelUsd }) => {
    const pathname = usePathname();
    const { account, provider } = useWeb3Auth(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${
            pathname.match("creator") ? "creator" : "individual"
        }}`
    );
    const [payout, setPayout] = useState({
        amount: Number(max),
        fees: 0.1,
        address: "",
    });
    const [loading, setLoading] = useState(false);
    const [statusText, setStatusText] = useState("");

    const initiateWithdrawal = async () => {
        setLoading(true);
        setStatusText("Initiating withdrawal...");

        if (payout.amount == 0) {
            setLoading(false);
            setStatusText("Enter a valid amount");
            return;
        }

        if (!ethers.utils.isAddress(payout.address)) {
            setLoading(false);
            setStatusText("Invalid address");
            return;
        }

        if (payout.amount + payout.fees > max) {
            setLoading(false);
            setStatusText(
                `Insufficient balance. Max allowed is ${
                    Number(max) - payout.fees
                }`
            );

            return;
        }

        if (provider === null) {
            setLoading(false);
            setStatusText("Please logout and login again.");
            return;
        }

        try {
            const p = new ethers.providers.JsonRpcProvider(
                "https://eth-rpc-api-testnet.thetatoken.org/rpc"
            );
            const privateKey = await provider.request({
                method: "eth_private_key",
            });

            let signer = new ethers.Wallet(privateKey, p);

            console.log(privateKey);

            const tx = await signer.sendTransaction({
                to: payout.address,
                value: ethers.utils.parseEther(payout.amount.toString()),
            });

            const receipt = await tx.wait();

            setLoading(false);
            setStatusText("Withdrawal successful.");
        } catch (error) {
            console.log(error);

            setLoading(false);
            setStatusText("Error occurred. Please try again.");
        }
    };

    return (
        <>
            <div className={`modal__box ${show ? "show" : ""}`}>
                <div className="modal__box-wrapper alert--bx shadow-lg rounded-2xl">
                    <button
                        className=" flex items-center rounded-full border-2 border-gray-700 absolute top-3 right-2  "
                        onClick={dismiss}
                    >
                        <span className="pointer-events-none flex items-center p-1">
                            <CloseIcon />
                        </span>
                    </button>
                    <div className="flex items-center justify-center mb-6 text-center">
                        <h1 className="text-base font-semibold mt-3 mb-2 text-[#344054]">
                            Wallet Withdrawal
                        </h1>
                    </div>
                    {statusText && (
                        <div className="w-full text-center py-4">
                            <div
                                className="w-full p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                                role="alert"
                            >
                                {loading && <Loader />}
                                <span className="font-semibold mr-2 text-left flex-auto">
                                    {" "}
                                    {statusText}
                                </span>
                            </div>
                        </div>
                    )}
                    <form onSubmit={initiateWithdrawal}>
                        <div className=" w-full">
                            <div className=" w-full">
                                <label
                                    className="font-medium mb-0 mt-3 text-sm"
                                    htmlFor="name"
                                >
                                    Amount
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    className="block w-full h-[50px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 transition duration-150 ease-in-out focus:border-gray-300 rounded-md focus:outline-none"
                                    name="name"
                                    autoComplete="off"
                                    max={max}
                                    required
                                    defaultValue={max}
                                    onChange={(e) =>
                                        setPayout({
                                            ...payout,
                                            amount: e.target.value,
                                        })
                                    }
                                />
                                <small className="text-[red]">
                                    Max available: {max} TFUEL
                                </small>
                            </div>
                        </div>
                        <div className="w-full mt-3">
                            <div className=" w-full">
                                <label
                                    className="font-medium mb-0 mt-3 text-sm"
                                    htmlFor="name"
                                >
                                    Receiver Address
                                </label>
                                <input
                                    id="address"
                                    type="text"
                                    className="block w-full h-[50px] text-sm px-4 py-2 text-gray-700 bg-white border border-gray-200 transition duration-150 ease-in-out focus:border-gray-300 rounded-md focus:outline-none"
                                    name="address"
                                    autoComplete="off"
                                    required
                                    placeholder="Enter receiver address"
                                    onChange={(e) =>
                                        setPayout({
                                            ...payout,
                                            address: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="border-t mt-2 border-[#D9D9D9] flex items-center justify-center w-full gap-8 pb-5 pt-2">
                            <h5 className="text-sm text-[#344054] font-medium">
                                {payout.amount} TFUEL{" "}
                                <span className="text-[#7F8691] text-xs font-normal">
                                    ~$
                                    {Number(tfuelUsd * payout.amount).toFixed(
                                        5
                                    )}
                                </span>
                            </h5>
                            <h5 className="text-[#7F8691] text-xs">
                                Fee{" "}
                                <span className="text-sm text-[#344054] font-medium">
                                    ${Number(tfuelUsd * payout.fees).toFixed(5)}
                                </span>
                            </h5>
                        </div>

                        <div className="flex items-start bg-[#E7F1FB] px-3 py-4 rounded-lg w-full gap-2 flex-wrap md:flex-nowrap">
                            <h4 className="grow whitespace-nowrap text-sm font-semibold">
                                Network Fees
                            </h4>

                            <div className="text-sm font-normal">
                                This fee is not charged by us but by the Theta
                                Network to process your transaction.
                            </div>
                        </div>

                        {!loading && (
                            <div className="flex items-center justify-end gap-4 mt-5 flex-row w-full text-sm">
                                <a
                                    className="px-4 py-3  bg-[#EBECED] text-[#344054] rounded-lg cursor-pointer"
                                    type="button"
                                    onClick={dismiss}
                                >
                                    Cancel
                                </a>
                                <a
                                    onClick={initiateWithdrawal}
                                    className="px-4 py-3 bg-[#046ED1] text-white rounded-lg cursor-pointer"
                                >
                                    Withdraw
                                </a>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};

export default GiftCardModal;
