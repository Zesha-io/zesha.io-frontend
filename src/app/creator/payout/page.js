"use client";
import Link from 'next/link';
import React from 'react';
import DropdownIcon from '../../../components/Icons/DropdownIcon';
import WalletIcon from '../../../components/Icons/WalletIcon';
import Layout from '../../../components/CreatorLayout/Layout';
import GiftCardModal from '../../../components/Modals/GiftCardModal';

const Payout = () => {
  const [openPayoutModal, setOpenPayoutModal] = React.useState(false);

  const handlePayoutModal = () => {
    setOpenPayoutModal(!openPayoutModal);
  };
  return (
    <Layout>
      <div className="pb-20 space-y-8">
        <div className="grow py-2 mb-3">
          <h1 className="text-xl font-medium">Payout</h1>
          <p className="text-[#7F8691] text-base">
            View all activities on your zesha videos
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <div className="shadow_main w-full bg-white relative rounded-lg flex flex-col justify-between">
              <div className="px-6 flex items-center justify-start gap-3 w-full py-8 ">
                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-3 transition duration-200 ease">
                  <WalletIcon />
                </span>
                <div className="flex items-start justify-start flex-col w-full">
                  <h5 className="text-[#344054] text-xl font-bold">2,560 </h5>
                  <span className="text-[#7F8691] text-sm">Wallet balance</span>
                </div>
              </div>
              <div className="bg-[#F3F3F4] px-6 py-4 flex items-center justify-between text-sm rounded-bl-lg rounded-br-lg">
                <button
                  className="text-[#046ED1] bg-white border border-[#DDE5F1] px-3 py-2 rounded-lg"
                  onClick={handlePayoutModal}
                >
                  withdraw
                </button>
                <button className="text-[#046ED1]">View withdrawals</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="">
              <h4 className="text-[#344054] text-base font-medium">
                Payment method
              </h4>
              <p className="text-[#7F8691] text-base">
                All available payment methods
              </p>
            </div>

            <button className="text-[#046ED1] bg-white border border-[#DDE5F1] px-3 py-2 rounded-lg flex items-center gap-2">
              Mauritius
              <DropdownIcon />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              className="shadow_main w-full relative rounded-lg py-8 flex flex-col justify-between h-32"
              style={{
                backgroundImage: 'url(/images/Lines-Wave3.svg)',
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#FFD6D6',
              }}
            >
              <div className="px-6 flex items-center justify-center gap-3 w-full h-full  ">
                <h5 className="text-[#344054] text-base font-medium">
                  Gift Cards
                </h5>
              </div>
            </div>

            <div
              className="shadow_main w-full relative rounded-lg py-8 flex flex-col justify-between h-32"
              style={{
                backgroundImage: 'url(/images/Lines-Wave1.svg)',
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#A3EFB8',
              }}
            >
              <div className="px-6 flex items-center justify-center gap-3 w-full h-full  ">
                <h5 className="text-[#344054] text-base font-medium">
                  Donate to Charity
                </h5>
              </div>
            </div>

            <div
              className="shadow_main w-full relative rounded-lg py-8 flex flex-col justify-between h-32"
              style={{
                backgroundImage: 'url(/images/Lines-Wave2.svg)',
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#C0DFFB',
              }}
            >
              <div className="px-6 flex items-center justify-center gap-3 w-full h-full  ">
                <h5 className="text-[#344054] text-base font-medium">
                  Wallet address
                </h5>
              </div>
            </div>

            <div
              className="shadow_main w-full relative rounded-lg py-8 flex flex-col justify-between h-32"
              style={{
                backgroundImage: 'url(/images/Lines-Wave4.svg)',
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#F4E3AF',
              }}
            >
              <div className="px-6 flex items-center justify-center gap-3 w-full h-full  ">
                <h5 className="text-[#344054] text-base font-medium">
                  Exclusive offer
                </h5>
              </div>

              <span className="text-[#35CD5E] bg-[#ECFBF0] rounded-2xl px-2 py-1 text-center text-xs absolute top-3 right-3 flex items-center justify-center">
                Coming soon
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-[#344054] text-base font-medium">
              Recent payouts
            </h4>

            <Link href="/" className="text-[#046ED1] text-xs">
              View all
            </Link>
          </div>

          <div className="bg-white rounded-lg">
            <div className="px-6 divide-y divide-[#EEEFF2] py-6">
              <div className="flex items-center justify-start gap-3 w-full py-4 ">
                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                  <WalletIcon />
                </span>
                <div className="flex items-start justify-start flex-col w-full">
                  <div className="flex items-center justify-between w-full">
                    <h5 className="text-[#344054] text-sm font-medium">
                      Transfer to wallet address
                    </h5>
                    <span className="text-[#344054] text-sm font-medium">
                      - $3,000
                    </span>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <span className="text-[#7F8691] text-xs">
                      Jan 05, 12:50
                    </span>
                    <span className="text-[#34A853] text-xs font-normal">
                      Successful
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-start gap-3 w-full py-4 ">
                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                  <WalletIcon />
                </span>
                <div className="flex items-start justify-start flex-col w-full">
                  <div className="flex items-center justify-between w-full">
                    <h5 className="text-[#344054] text-sm font-medium">
                      Transfer charges
                    </h5>
                    <span className="text-[#344054] text-sm font-medium">
                      - $0.55
                    </span>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <span className="text-[#7F8691] text-xs">
                      Jan 05, 12:50
                    </span>
                    <span className="text-[#34A853] text-xs font-normal">
                      Successful
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-start gap-3 w-full py-4 ">
                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                  <WalletIcon />
                </span>
                <div className="flex items-start justify-start flex-col w-full">
                  <div className="flex items-center justify-between w-full">
                    <h5 className="text-[#344054] text-sm font-medium">
                      Transfer to wallet address
                    </h5>
                    <span className="text-[#344054] text-sm font-medium">
                      - $3,000
                    </span>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <span className="text-[#7F8691] text-xs">
                      Jan 05, 12:50
                    </span>
                    <span className="text-[#34A853] text-xs font-normal">
                      Successful
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GiftCardModal show={openPayoutModal} dismiss={handlePayoutModal} />
    </Layout>
  );
};

export default Payout;
