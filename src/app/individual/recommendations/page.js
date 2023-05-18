"use client";

import Image from 'next/image';
import React from 'react';
import EmptyState from '../../../components/EmptyState';
import VideoAddIcon from '../../../components/Icons/VideoAddIcon';
import VideoPlayIcon from '../../../components/Icons/VideoPlayIcon';
import Layout from '../../../components/IndividualLayout/Layout';

const Recommendations = () => {
  return (
    <Layout>
      <div className="pb-20">
        <div className="grow py-2 mb-3">
          <h1 className="text-xl font-medium">Recommendations</h1>
          <p className="text-[#7F8691] text-base">
            Watch your recommended videos for the day
          </p>
        </div>

        <div className='py-5'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div>
              <div className="h-32 block relative w-full object-cover">
                <Image
                  src={'/images/demoimage.png'}
                  fill
                  priority
                  alt={`Picture of image`}
                  className="object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-[#0B0A1D] text-white rounded-full px-2 py-1 text-xs flex items-center justify-center">
                  00:30
                </span>
              </div>
              <div className="flex items-center justify-start gap-3 w-full py-4 ">
                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF]">
                  <Image
                    src={'/images/pic1.png'}
                    width={50}
                    height={50}
                    priority
                    alt={`Picture of image`}
                    className=" rounded-full object-cover"
                  />
                </span>
                <div className="flex items-start justify-between w-full flex-col">
                  <h5 className="text-[#344054] text-sm font-medium">
                    The Incessant
                  </h5>
                  <span className="text-[#5C636E] text-xs font-normal">
                    AlhamiTV
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="h-32 block relative w-full object-cover">
                <Image
                  src={'/images/demoimage.png'}
                  fill
                  priority
                  alt={`Picture of image`}
                  className="object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-[#0B0A1D] text-white rounded-full px-2 py-1 text-xs flex items-center justify-center">
                  00:30
                </span>
              </div>
              <div className="flex items-center justify-start gap-3 w-full py-4 ">
                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF]">
                  <Image
                    src={'/images/pic2.png'}
                    width={50}
                    height={50}
                    priority
                    alt={`Picture of image`}
                    className=" rounded-full object-cover"
                  />
                </span>
                <div className="flex items-start justify-between w-full flex-col">
                  <h5 className="text-[#344054] text-sm font-medium">
                  Under the sea
                  </h5>
                  <span className="text-[#5C636E] text-xs font-normal">
                  Zantena
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="h-32 block relative w-full object-cover">
                <Image
                  src={'/images/demoimage.png'}
                  fill
                  priority
                  alt={`Picture of image`}
                  className="object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-[#0B0A1D] text-white rounded-full px-2 py-1 text-xs flex items-center justify-center">
                  00:30
                </span>
              </div>
              <div className="flex items-center justify-start gap-3 w-full py-4 ">
                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF]">
                  <Image
                    src={'/images/pic3.png'}
                    width={50}
                    height={50}
                    priority
                    alt={`Picture of image`}
                    className=" rounded-full object-cover"
                  />
                </span>
                <div className="flex items-start justify-between w-full flex-col">
                  <h5 className="text-[#344054] text-sm font-medium">
                  Most expensive rides
                  </h5>
                  <span className="text-[#5C636E] text-xs font-normal">
                  Zantena
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="h-32 block relative w-full object-cover">
                <Image
                  src={'/images/demoimage.png'}
                  fill
                  priority
                  alt={`Picture of image`}
                  className=" object-cover"
                />
                <span className="absolute bottom-2 right-2 bg-[#0B0A1D] text-white rounded-full px-2 py-1 text-xs flex items-center justify-center">
                  00:30
                </span>
              </div>
              <div className="flex items-center justify-start gap-3 w-full py-4 ">
                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF]">
                  <Image
                    src={'/images/pic4.png'}
                    width={50}
                    height={50}
                    priority
                    alt={`Picture of image`}
                    className=" rounded-full object-cover"
                  />
                </span>
                <div className="flex items-start justify-between w-full flex-col">
                  <h5 className="text-[#344054] text-sm font-medium">
                  Food to choke on
                  </h5>
                  <span className="text-[#5C636E] text-xs font-normal">
                  GreatZanda
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <EmptyState
          icon={<VideoAddIcon />}
          text="Stay tuned for recommended videos"
        />
      </div>
    </Layout>
  );
};

export default Recommendations;
