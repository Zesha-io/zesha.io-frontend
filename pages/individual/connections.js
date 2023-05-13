import Image from 'next/image';
import React from 'react';
import EmptyState from '../../components/EmptyState';
import CloudConnectionIcon from '../../components/Icons/CloudConnectionIcon';
import ConvertIcon from '../../components/Icons/ConvertIcon';
import VideoPlayIcon from '../../components/Icons/VideoPlayIcon';
import Layout from '../../components/IndividualLayout/Layout';

const Connections = () => {
  return (
    <Layout>
      <div className="pb-20">
        <div className="flex items-center justify-between flex-wrap py-2 mb-7">
          <div>
            <h1 className="text-xl font-medium">Connections</h1>
            <p className="text-[#7F8691] text-base">
              View all activities on zesha
            </p>
          </div>
          <button className="flex items-center gap-2 text-[#046ED1] border border-[#046ED1] px-2 py-2 rounded-lg filter">
            <CloudConnectionIcon /> Connect new extension
          </button>
        </div>

        <div className="mb-7">
          <div className="grid grids-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="shadow_main w-full bg-white relative py-8 rounded-lg flex flex-col justify-between">
              <div className="px-6 flex items-center justify-start gap-3 w-full">
                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-3 transition duration-200 ease">
                  <Image src={'/images/chrome.png'} width={40} height={40} />
                </span>
                <div className="flex items-start justify-start flex-col w-full">
                  <h5 className="text-[#344054] text-xl font-bold">Chrome</h5>
                  <span className="text-[#7F8691] text-sm">
                    Mon, May 2nd, 2023
                  </span>
                </div>
              </div>
              <span className="text-[#7F8691] text-sm font-normal absolute top-4 right-4">
              Last used 55 mins ago
              </span>
            </div>
          </div>
        </div>

        <EmptyState icon={<ConvertIcon />} text='You have no connections'/>

      </div>
    </Layout>
  );
};

export default Connections;
