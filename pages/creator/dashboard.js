import Link from 'next/link';
import React from 'react';
import MoneyIcon from '../../components/Icons/MoneyIcon';
import VideoPlayIcon from '../../components/Icons/VideoPlayIcon';
import WalletIcon from '../../components/Icons/WalletIcon';
import Layout from '../../components/Layout/Layout';

const Dashboard = () => {
  return (
    <Layout>
      <div>
        <div className="grow py-2 mb-3">
          <h1 className="text-xl font-medium  ">Dashboard</h1>
          <p className="text-[#7F8691] text-base">
            View all activities on your zesha videos
          </p>
        </div>

        <div className="mb-12">
          <div className="grid grids-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="shadow w-full bg-white relative py-8 rounded-lg border border-[#E4E7EC] flex flex-col justify-between">
              <div className="px-6 flex items-center justify-start gap-3 w-full">
                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-3 transition duration-200 ease">
                  <WalletIcon />
                </span>
                <div className="flex items-start justify-start flex-col w-full">
                  <h5 className="text-[#344054] text-xl font-bold">
                    2,560 TFUEL{' '}
                    <span className="text-[#7F8691] text-sm font-normal">
                      ~ $2,560
                    </span>
                  </h5>
                  <span className="text-[#7F8691] text-sm">Wallet balance</span>
                </div>
              </div>
            </div>
            <div className="shadow w-full bg-white relative py-8 rounded-lg border border-[#E4E7EC] flex flex-col justify-between">
              <div className="px-6 flex items-center justify-start gap-3 w-full">
                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-3 transition duration-200 ease">
                  <MoneyIcon />
                </span>
                <div className="flex items-start justify-start flex-col w-full">
                  <h5 className="text-[#344054] text-xl font-bold">
                    9,500 TFUEL{' '}
                    <span className="text-[#7F8691] text-sm font-normal">
                      ~ $2,560
                    </span>
                  </h5>
                  <span className="text-[#7F8691] text-sm">Wallet balance</span>
                </div>
              </div>
            </div>
            <div className="shadow w-full bg-white relative py-8 rounded-lg border border-[#E4E7EC] flex flex-col justify-between">
              <div className="px-6 flex items-center justify-start gap-3 w-full">
                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-3 transition duration-200 ease">
                  <VideoPlayIcon />
                </span>
                <div className="flex items-start justify-start flex-col w-full">
                  <h5 className="text-[#344054] text-xl font-bold">800</h5>
                  <span className="text-[#7F8691] text-sm">Video views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
