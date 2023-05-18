"use cient";
import Image from 'next/image';
import React from 'react';
import GalleryImportIcon from '../../../components/Icons/GalleryImportIcon';
import Layout from '../../../components/CreatorLayout/Layout';

const UploadVideo = () => {
  return (
    <Layout>
      <div className="pb-20">
        <div className="grow py-2 mb-3">
          <h1 className="text-xl font-medium">Upload video</h1>
          <p className="text-[#7F8691] text-base">
            Add your videos to zesha to start earning
          </p>
        </div>
        <div className="h-full w-full mb-6 py-6 ">
          <div className="flex flex-wrap lg:flex-nowrap w-full gap-6 relative">
            <div className="w-full lg:w-8/12 space-detail">
              <div>
                <form className="">
                  <div className="w-full bg-white px-8 py-4 rounded-lg">
                    <div className="mb-6 w-full text-[#334155]">
                      <label
                        className="font-medium mb-3 text-sm"
                        htmlFor="title"
                      >
                        Title
                      </label>
                      <input
                        id="title"
                        type="text"
                        className="block w-full h-[50px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 transition duration-150 ease-in-out focus:border-gray-300 rounded-md focus:outline-none"
                        name="title"
                        autoComplete="off"
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

                    <div className="mb-6">
                      <label
                        className="text-[#334155] text-sm font-medium mb-3"
                        htmlFor="upload_video"
                      >
                        Upload video
                      </label>
                      <div class="w-full bg-white mt-1  relative overflow-hidden rounded py-4 border border-dashed border-[#CBD5E1] cursor-pointer">
                        <div class="flex items-center justify-between flex-col gap-3 w-full py-10  ">
                          <span class="text-[#046ED1]">
                            <GalleryImportIcon />
                          </span>
                          <h5 class="text-sm text-[#7F8691] ">
                            <span class="text-secondary ">
                              Drag and drop video files to upload
                            </span>
                          </h5>
                          <button class="text-[#046ED1] text-sm underline ">
                            Select files
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <label
                        className="text-[#334155] text-sm font-medium mb-3"
                        htmlFor="upload_thumbnail"
                      >
                        Thumbnail
                      </label>
                      <div class="w-full md:w-1/4 bg-white mt-1  relative overflow-hidden rounded py-4 border border-dashed border-[#CBD5E1] cursor-pointer">
                        <div class="flex items-center justify-between flex-col gap-3 w-full py-4  ">
                          <span class="text-[#046ED1]">
                            <GalleryImportIcon />
                          </span>
                          <button class="text-[#046ED1] text-sm underline ">
                            Upload thumbnail
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end justify-end gap-2 mt-4">
                    <button className="text-[#344054] bg-[#E8E8E9] px-7 py-3 rounded-lg text-sm transition duration-150 ease-in-out">
                      Cancel
                    </button>
                    <button
                      //   type="submit"
                      className="inline-block px-7 py-3 bg-secondary text-white bg-[#046ED1] font-medium text-sm leading-snug capitalize rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Upload Video
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-full lg:w-4/12 block ">
              <div className="rounded-lg p-2 lg:p-0 md:sticky z-50 top-2 transition-all duration-200 ease-linear text-sm bg-[#fbfbff] ">
                <div className="p-4 px-6 h-full">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium">Preview</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="w-full h-48 relative block rounded-lg object-cover">
                      <Image
                        src={'/images/demoimage.png'}
                        fill
                        priority
                        alt={`Picture of image`}
                        className=" rounded-lg object-cover"
                      />
                    </div>
                    <div className="">
                      <h4 className="text-[#344054] text-base font-medium">
                        Creating the bedroom of your dreams
                      </h4>
                    </div>

                    <div>
                      <h6 className="text-[#7F8691] text-sm mb-2">
                        Description
                      </h6>
                      <p className="text-[#344054] text-sm text-justify">
                        Lorem ipsum dolor sit amet consectetur. Non purus
                        eleifend quis sit justo at. Sagittis quisque proin
                        accumsan sed pharetra sit feugiat risus. Vehicula.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UploadVideo;
