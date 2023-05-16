import Image from 'next/image';
import React from 'react';
import Layout from '../../../components/CreatorLayout/Layout';

const Settings = () => {
  return (
    <Layout>
      <div className="pb-20">
        <div className="grow py-2 mb-3">
          <h1 className="text-xl font-medium  ">Settings</h1>
          <p className="text-[#7F8691] text-base">
            View all activities on your zesha videos
          </p>
        </div>

        <div className=" max-w-auto w-full xl:max-w-[600px] settings_form bg-white rounded-lg">
          <div className="p-8   w-full md:w-4/5">
            <form>
              <div className="w-full">
                <div className="mb-4">
                  <h3 className="text-lg font-medium">Profile</h3>
                </div>
                <div className="mb-6 w-full text-[#334155]">
                  <label className="font-medium mb-3 text-sm" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="block w-full h-[50px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 transition duration-150 ease-in-out focus:border-gray-300 rounded-md focus:outline-none"
                    name="name"
                    autocomplete="off"
                  />
                </div>

                <div className="mb-6 ">
                  <label
                    className="text-[#334155] text-sm font-medium mb-3"
                    htmlFor="email"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    className="block w-full h-12 px-4 py-2 mt-2 text-[#94A3B8] bg-[#F9F9FA] rounded-md focus:outline-none transition duration-150 ease-in-out"
                    name="email"
                    autoComplete="off"
                    defaultValue="Pals***@gmail.com"
                    readOnly
                  />
                </div>
              </div>

              <div className="w-full py-5 mt-5">
                <div className="mb-4">
                  <h3 className="text-lg font-medium">Channel</h3>
                </div>
                <div className="mb-6 ">
                  <label
                    className="text-[#334155] text-sm font-medium mb-3 "
                    htmlFor="c_name"
                  >
                    Channel Name
                  </label>
                  <input
                    id="c_name"
                    type="text"
                    className="block w-full h-[50px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 transition duration-150 ease-in-out focus:border-gray-300 rounded-md focus:outline-none"
                    name="c_name"
                    autocomplete="off"
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="text-[#334155] text-sm font-medium mb-3"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 mt-1 py-2 bg-white border border-gray-200 transition duration-150 ease-in-out focus:border-gray-300 rounded-md focus:outline-none"
                  ></textarea>
                </div>
                <div className="mb-6 ">
                  <label
                    className="text-[#334155] text-sm font-medium mb-3"
                    htmlFor="channel_logo"
                  >
                    Channel Logo
                  </label>
                  <div className="flex items-center justify-start gap-4 py-3">
                    <Image
                      src={'/images/pic_placeholder.png'}
                      height={100}
                      width={90}
                    />

                    <div className="flex items-start flex-col ml-5 gap-2">
                      <button className="text-[#046ED1] text-sm">
                        Edit photo
                      </button>
                      <button className="text-[#7F8691] text-sm">
                        Delete photo
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-end">
                <button
                  //   type="submit"
                  className="inline-block px-7 py-3 bg-secondary text-white bg-[#046ED1] font-medium text-sm leading-snug capitalize rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Update
                </button>
              </div>

              <div className="w-full py-5 mt-5">
                <div className="mb-4">
                  <h3 className="text-lg font-medium">
                    Notification references
                  </h3>
                </div>
                <div>
                  <div>
                    <h5 className="text-[#334155] text-sm">Email</h5>
                    <p className="text-[#334155] text-[13px]">
                      Get notifications, whenever;
                    </p>
                  </div>

                  <div className="mb-6 py-3 space-y-4">
                    <div className="form-group form-check flex justify-start space-x-3">
                      <input
                        type="checkbox"
                        className="form-check-input h-5 w-5 border border-gray-300 rounded-lg bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                        id="tips"
                      />
                      <label
                        className="form-check-label inline-block text-[#334155] text-[13px]"
                        htmlFor="tips"
                      >
                        Whenever you get tips
                      </label>
                    </div>

                    <div className="form-group form-check flex justify-start space-x-3">
                      <input
                        type="checkbox"
                        className="form-check-input h-5 w-5 border border-gray-300 rounded-lg bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                        id="guest_video_view"
                      />
                      <label
                        className="form-check-label inline-block text-[#334155] text-[13px]"
                        htmlFor="guest_video_view"
                      >
                        Someone views your video
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-end">
                <button
                  //   type="submit"
                  className="inline-block px-7 py-3 bg-secondary text-white bg-[#046ED1] font-medium text-sm leading-snug capitalize rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
