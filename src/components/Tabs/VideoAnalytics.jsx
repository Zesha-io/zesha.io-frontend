"use client";

import React from "react";

import { Tabs } from "react-tabs";
import Tab from "react-tabs/lib/components/Tab";
import TabList from "react-tabs/lib/components/TabList";
import TabPanel from "react-tabs/lib/components/TabPanel";
import MoneyIcon from "@/components/Icons/MoneyIcon";
import EyeIcon from "@/components/Icons/EyeIcon";
import VideoTimeIcon from "@/components/Icons/VideoTimeIcon";
import ThumbsDownIcon from "@/components/Icons/ThumbsDownIcon";
import ThumbsUpIcon from "@/components/Icons/ThumbsUpIcon";

import VideoAnalyticChart from "@/components/Charts/VideoAnalyticChart";

export default function VideoAnalytics({ analytics }) {
    return (
        <div className="h-full pb-24 px-4 md:px-8 py-10 bg-white mb-4 rounded-lg">
            <Tabs>
                <div className="flex items-center mb-3 flex-col lg:flex-row">
                    <TabList className="flex flex-row items-center justify-start flex-wrap tabs-header w-full rounded-md gap-3 border-b border-[#EEEFF0]">
                        <Tab className="">
                            <button className="flex items-center text-sm border-white border-1 px-5 py-2 rounded h-12">
                                Overview
                            </button>
                        </Tab>
                        {/* <Tab className="">
                            <button className="flex items-center text-sm border-white border-1 px-5 py-2 rounded h-12">
                                Engagement
                            </button>
                        </Tab>
                        <Tab className="">
                            <button className="flex items-center text-sm border-white border-1 px-5 py-2 rounded h-12">
                                Audience
                            </button>
                        </Tab> */}
                    </TabList>
                </div>

                <div className="py-6">
                    <TabPanel>
                        <div className=" w-fullmt-3 md:mt-0 rounded fade-in relative">
                            <Tabs>
                                <div className="flex gap-4 flex-wraps flex-row">
                                    <div className="flex items-center mb-3 flex-col lg:w-1/4 w-fulls">
                                        <TabList className="flex flex-col items-start justify-start flex-wrap inner_tab_header  rounded-md gap-3 w-full ">
                                            <Tab className="w-full">
                                                <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#344054]  rounded-lg gap-2">
                                                    <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                                                        <EyeIcon />
                                                    </span>
                                                    <b className="text-lg">
                                                        {
                                                            analytics?.totalvideoviews
                                                        }
                                                    </b>{" "}
                                                    <span className="text-xs">
                                                        Views
                                                    </span>
                                                </button>
                                            </Tab>
                                            <Tab className="w-full">
                                                <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#344054]  rounded-lg gap-2">
                                                    <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                                                        <VideoTimeIcon />
                                                    </span>
                                                    <b className="text-lg">
                                                        {
                                                            analytics?.totaltimewatched
                                                        }
                                                    </b>{" "}
                                                    <span className="text-xs">
                                                        Hours watched
                                                    </span>
                                                </button>
                                            </Tab>
                                            <Tab className="w-full">
                                                <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#344054]  rounded-lg gap-2">
                                                    <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                                                        <MoneyIcon />
                                                    </span>
                                                    <b className="text-lg">
                                                        {
                                                            analytics.creatorearnings
                                                        }{" "}
                                                    </b>
                                                    <span className="text-xs">
                                                        Earnings (TFuel)
                                                    </span>
                                                </button>
                                            </Tab>
                                        </TabList>
                                    </div>

                                    <div className="flex flex-col lg:w-3/4 w-fulls">
                                        <TabPanel>
                                            <div>
                                                <VideoAnalyticChart
                                                    data={
                                                        analytics.viewsgroupedbydate
                                                    }
                                                />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div>
                                                <VideoAnalyticChart
                                                    data={
                                                        analytics.timewatchedgroupedbydate
                                                    }
                                                />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div>
                                                <VideoAnalyticChart
                                                    data={
                                                        analytics.totalearningsgroupedbydate
                                                    }
                                                />
                                            </div>
                                        </TabPanel>
                                    </div>
                                </div>
                            </Tabs>
                        </div>
                    </TabPanel>
                    {/* <TabPanel>
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
                                                    <b className="text-lg">
                                                        200
                                                    </b>{" "}
                                                    Total watch time
                                                </button>
                                            </Tab>
                                            <Tab className="w-full">
                                                <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#344054]  rounded-lg gap-2">
                                                    <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                                                        <VideoTimeIcon />
                                                    </span>
                                                    <b className="text-lg">
                                                        200
                                                    </b>{" "}
                                                    Average viewed duration
                                                </button>
                                            </Tab>
                                            <Tab className="w-full">
                                                <button className="flex items-center justify-start text-sm p-3 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#344054]  rounded-lg gap-3">
                                                    <span className="flex items-center gap-2">
                                                        <ThumbsUpIcon />
                                                        <span className="flex items-center gap-1">
                                                            <b className="text-lg">
                                                                200{" "}
                                                            </b>
                                                            Likes
                                                        </span>
                                                    </span>
                                                    <span className="flex items-center gap-2">
                                                        <ThumbsDownIcon />
                                                        <span className="flex items-center gap-1">
                                                            <b className="text-lg">
                                                                10{" "}
                                                            </b>
                                                            Likes
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
                                            <div>
                                                200 Average viewed duration
                                            </div>
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
                                                    <b className="text-lg">
                                                        40
                                                    </b>{" "}
                                                    Returning viewers
                                                </button>
                                            </Tab>
                                            <Tab className="w-full">
                                                <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#046ED1]  rounded-lg gap-2">
                                                    <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                                                        <VideoTimeIcon />
                                                    </span>
                                                    <b className="text-lg">
                                                        300
                                                    </b>{" "}
                                                    Unique viewers
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
                    </TabPanel> */}
                </div>
            </Tabs>
        </div>
    );
}
