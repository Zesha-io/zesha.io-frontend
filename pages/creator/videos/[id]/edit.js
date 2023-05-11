import Image from 'next/image';
import Layout from '../../../../components/Layout/Layout';
import React from 'react';
import { Tabs } from 'react-tabs';
import Tab from 'react-tabs/lib/components/Tab';
import TabList from 'react-tabs/lib/components/TabList';
import TabPanel from 'react-tabs/lib/components/TabPanel';
import GalleryImportIcon from '../../../../components/Icons/GalleryImportIcon';
import MoneyIcon from '../../../../components/Icons/MoneyIcon';
import EyeIcon from '../../../../components/Icons/EyeIcon';
import VideoTimeIcon from '../../../../components/Icons/VideoTimeIcon';
import ThumbsDownIcon from '../../../../components/Icons/ThumbsDownIcon';
import ThumbsUpIcon from '../../../../components/Icons/ThumbsUpIcon';

const Edit = () => {
  return (
    <Layout>
      <div className="pb-40">
        <div className="grow py-2 mb-3">
          <div className="flex items-center justify-start gap-3">
            <h1 className="text-xl font-medium">Video</h1>
            <h1 className="text-xl font-medium">Edit video</h1>
          </div>

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
                        htmlFor="upload_thumbnail"
                      >
                        Thumbnail
                      </label>
                      <div className="flex items-center flex-row flex-wrap justify-start gap-3">
                        <div className="h-24 block relative w-32 object-cover">
                          <Image
                            src={'/images/demoimage.png'}
                            fill
                            priority
                            alt={`Picture of image`}
                            className=" rounded-lg object-cover"
                          />
                        </div>
                        <div className="w-1/2 md:w-1/4 bg-white mt-1  relative overflow-hidden rounded py-3 border border-dashed border-[#CBD5E1] cursor-pointer">
                          <div className="flex items-center justify-between flex-col gap-3 w-full py-3  ">
                            <span className="text-[#046ED1]">
                              <GalleryImportIcon />
                            </span>
                            <button className="text-[#046ED1] text-sm underline ">
                              Upload thumbnail
                            </button>
                          </div>
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
                      Save Video
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-full lg:w-4/12 block ">
              <div className="rounded-lg p-2 lg:p-0 transition-all duration-200 ease-linear text-sm bg-[#fbfbff] ">
                <div className="py-6 px-6 h-full">
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

        <div className="h-full pb-24 px-4 md:px-8 py-10 bg-white mb-4 rounded-lg">
          <Tabs>
            <div className="flex items-center mb-3 flex-col lg:flex-row">
              <TabList className="flex flex-row items-center justify-start flex-wrap tabs-header w-full rounded-md gap-3 border-b border-[#EEEFF0]">
                <Tab className="">
                  <button className="flex items-center text-sm border-white border-1 px-5 py-2 rounded h-12">
                    Overview
                  </button>
                </Tab>
                <Tab className="">
                  <button className="flex items-center text-sm border-white border-1 px-5 py-2 rounded h-12">
                    Engagement
                  </button>
                </Tab>
                <Tab className="">
                  <button className="flex items-center text-sm border-white border-1 px-5 py-2 rounded h-12">
                    Audience
                  </button>
                </Tab>
              </TabList>
            </div>

            <div className="py-6">
              <TabPanel>
                <div className=" w-full  mt-3 md:mt-0 rounded fade-in relative">
                  <Tabs>
                    <div className="flex gap-4 flex-wrap">
                      <div className="flex items-center mb-3 flex-col lg:w-1/4 w-full">
                        <TabList className="flex flex-col items-start justify-start flex-wrap inner_tab_header  rounded-md gap-3 w-full ">
                          <Tab className="w-full">
                            <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#344054]  rounded-lg gap-2">
                              <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                                <EyeIcon />
                              </span>
                              <b className="text-lg">200</b> Views
                            </button>
                          </Tab>
                          <Tab className="w-full">
                            <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#344054]  rounded-lg gap-2">
                              <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                                <VideoTimeIcon />
                              </span>
                              <b className="text-lg">200</b> Hours watched
                            </button>
                          </Tab>
                          <Tab className="w-full">
                            <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#344054]  rounded-lg gap-2">
                              <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                                <MoneyIcon />
                              </span>
                              <b className="text-lg">$8,000 </b>Earnings
                            </button>
                          </Tab>
                        </TabList>
                      </div>

                      <div>
                        <TabPanel>
                          <div>200 Views</div>
                        </TabPanel>
                        <TabPanel>
                          <div>200 Hours watched</div>
                        </TabPanel>
                        <TabPanel>
                          <div>$8,000 Earnings</div>
                        </TabPanel>
                      </div>
                    </div>
                  </Tabs>
                </div>
              </TabPanel>
              <TabPanel>
                <div className=" w-full  mt-3 md:mt-0 rounded fade-in relative">
                  <Tabs>
                    <div className="flex gap-4 flex-wrap">
                      <div className="flex items-center mb-3 flex-col lg:w-1/4 w-full">
                        <TabList className="flex flex-col items-start justify-start flex-wrap inner_tab_header  rounded-md gap-3 w-full ">
                          <Tab className="w-full">
                            <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#344054]  rounded-lg gap-2">
                              <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                                <EyeIcon />
                              </span>
                              <b className="text-lg">200</b> Total watch time
                            </button>
                          </Tab>
                          <Tab className="w-full">
                            <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#344054]  rounded-lg gap-2">
                              <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                                <VideoTimeIcon />
                              </span>
                              <b className="text-lg">200</b> Average viewed
                              duration
                            </button>
                          </Tab>
                          <Tab className="w-full">
                            <button className="flex items-center justify-start text-sm p-3 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#344054]  rounded-lg gap-3">
                              <span className="flex items-center gap-2">
                                <ThumbsUpIcon />
                                <span className="flex items-center gap-1">
                                  <b className="text-lg">200 </b>Likes
                                </span>
                              </span>
                              <span className="flex items-center gap-2">
                                <ThumbsDownIcon />
                                <span className="flex items-center gap-1">
                                  <b className="text-lg">10 </b>Likes
                                </span>
                              </span>
                            </button>
                          </Tab>
                        </TabList>
                      </div>

                      <div>
                        <TabPanel>
                          <div>200 Total watch time</div>
                        </TabPanel>
                        <TabPanel>
                          <div>200 Average viewed duration</div>
                        </TabPanel>
                        <TabPanel>
                          <div>200 Likes 10 Likes</div>
                        </TabPanel>
                      </div>
                    </div>
                  </Tabs>
                </div>
              </TabPanel>
              <TabPanel>
                <div className=" w-full  mt-3 md:mt-0 rounded fade-in relative">
                  <Tabs>
                    <div className="flex gap-4 flex-wrap">
                      <div className="flex items-center mb-3 flex-col lg:w-1/4 w-full">
                        <TabList className="flex flex-col items-start justify-start flex-wrap inner_tab_header  rounded-md gap-2 w-full border border-b border-[#F0F1F5">
                          <Tab className="w-full">
                            <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#046ED1]  rounded-lg gap-2">
                              <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                                <EyeIcon />
                              </span>
                              <b className="text-lg">40</b> Returning viewers
                            </button>
                          </Tab>
                          <Tab className="w-full">
                            <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#046ED1]  rounded-lg gap-2">
                              <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                                <VideoTimeIcon />
                              </span>
                              <b className="text-lg">300</b> Unique viewers
                            </button>
                          </Tab>
                        </TabList>
                      </div>

                      <div>
                        <TabPanel>
                          <div>40 Returning viewers</div>
                        </TabPanel>
                        <TabPanel>
                          <div>300 Unique viewers</div>
                        </TabPanel>
                      </div>
                    </div>
                  </Tabs>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Edit;
