import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from "@web3auth/base";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useRouter, usePathname } from "next/navigation";

const clientId =
    "BJgW2unbHXVCrRwtNtmws_f4i8Z32d1mcm4jw3rxa3ieerlQOXsAPhGL97yNWjB_iOheWuxQtZQS-Vo3EQJHhFw";

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export default function useWeb3Auth(redirectUrl) {
    const [web3auth, setWeb3auth] = useState(null);
    const [provider, setProvider] = useState(null);
    const [account, setAccount] = useState();
    const router = useRouter();
    const pathname = usePathname();
    const [redirect, setRedirect] = useState(redirectUrl);

    useEffect(() => {
        const user = getCookie("zesha_account");
        if (user) {
            setAccount(JSON.parse(user));
        }

        console.log("WEB3AUTH: ", web3auth);
    }, []);

    useEffect(() => {
        const init = async () => {
            try {
                const web3auth = new Web3AuthNoModal({
                    clientId,
                    chainConfig: {
                        chainNamespace: CHAIN_NAMESPACES.EIP155,
                        chainId: "0x13881",
                        rpcTarget: "https://rpc.ankr.com/polygon_mumbai",
                        // chainId: "0x16d",
                        // rpcTarget:
                        // "https://eth-rpc-api-testnet.thetatoken.org/rpc",
                        // tickerName: "TFUEL",
                    },
                    // web3AuthNetwork: "testnet",
                    web3AuthNetwork: "cyan",
                });

                const openloginAdapter = new OpenloginAdapter({
                    adapterSettings: {
                        clientId, //Optional - Provide only if you haven't provided it in the Web3Auth Instantiation Code
                        loginProvider: ["google", "facebook"],
                        redirectUrl: redirect,
                        whiteLabel: {
                            name: "Zesha",
                            logoLight:
                                "https://user-images.githubusercontent.com/7295729/236681515-e3e1cbab-fdbf-4fad-92b9-b35a3e661b28.png",
                            logoDark:
                                "https://user-images.githubusercontent.com/7295729/236681515-e3e1cbab-fdbf-4fad-92b9-b35a3e661b28.png",
                            defaultLanguage: "en",
                        },
                    },
                });

                web3auth.configureAdapter(openloginAdapter);

                setWeb3auth(web3auth);

                await web3auth.init();

                if (web3auth.provider) {
                    setProvider(web3auth.provider);
                }
            } catch (error) {
                console.log("WEBEAUTH_ERROR: ", error);
            }
        };

        init();
    }, []);

    useEffect(() => {
        console.log("WEB3AUTH: ", web3auth);
    }, [web3auth]);

    const logout = async () => {
        await web3auth.logout();
        document.cookie =
            "authorized=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie =
            "zesha_account=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        router.replace(
            `${process.env.NEXT_PUBLIC_BASE_URL}/${
                pathname.match("creator") ? "creator" : "individual"
            }/auth/login`
        );
    };

    const getAccount = async (p) => {
        try {
            const provider = new ethers.providers.Web3Provider(p);
            const signer = provider.getSigner();
            const account = await signer.getAddress();
            return account;
        } catch (error) {
            return error;
        }
    };

    const getBalance = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(provider);
            const signer = provider.getSigner();
            const account = await signer.getAddress();
            // Get user's balance in ether
            const balance = ethers.utils.formatEther(
                await provider.getBalance(account) // Balance is in wei
            );
            return balance;
        } catch (error) {
            console.log(error);

            return 0.0;
        }
    };

    const getUserInfo = async () => {
        if (!web3auth) {
            console.log("web3auth not initialized yet");
            return;
        }
        const user = await web3auth.getUserInfo();

        return user;
    };

    const getUserById = async (
        email,
        userType,
        walletAddress,
        name,
        avatar
    ) => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/users?by=email&email=${email}`
        );

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Something went wrong");
            return null;
        }

        if (data.status) {
            return {
                userId: data.data.id,
                channelId: data.data?.creatorchannel?.id,
            };
        } else {
            const res2 = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/users`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        userType: userType,
                        walletAddress: walletAddress,
                        profileAvatar: avatar,
                    }),
                }
            );

            const data2 = await res2.json();

            if (!res2.ok) {
                throw new Error(data2.message || "Something went wrong");
                return {
                    userId: null,
                    channelId: null,
                };
            }

            if (data2.status) {
                return {
                    userId: data2.data.id,
                    channelId: data2.data?.creatorchannel?.id,
                };
            } else {
                throw new Error(data2.message || "Something went wrong");
                return {
                    userId: null,
                    channelId: null,
                };
            }
        }

        return {
            userId: null,
            channelId: null,
        };
    };

    const login = async (providerName) => {
        if (!web3auth) {
            throw new Error("web3auth not initialized yet");
            return;
        }

        const web3authProvider = await web3auth.connectTo(
            WALLET_ADAPTERS.OPENLOGIN,
            {
                mfaLevel: "default",
                loginProvider: providerName,
            }
        );

        setProvider(web3authProvider);

        try {
            await web3auth.authenticateUser();
            const user = await getUserInfo();
            const address = await getAccount(web3authProvider);

            const userType = pathname.match("creator") ? "CREATOR" : "VIEWER";

            const { userId, channelId } = await getUserById(
                user.email,
                userType,
                address,
                user.name,
                user.profileImage
            );

            if (userId) {
                const profile = {
                    name: user.name,
                    email: user.email,
                    profileImage: user.profileImage,
                    idToken: user.idToken,
                    address: address,
                    userType: userType,
                    userId: userId,
                    channelId: channelId,
                };

                setAccount(profile);

                document.cookie = "authorized=true; path=/;";
                document.cookie = `zesha_account=${JSON.stringify(
                    profile
                )}; path=/;`;

                router.replace(redirect);
            } else {
                throw new Error("Something went wrong");
            }
        } catch (error) {
            console.log("AUTH_ERROR: ", error);
        }
    };

    return { web3auth, provider, account, login, logout };
}
