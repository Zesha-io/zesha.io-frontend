"use client";

import React from "react";
import MoneyIcon from "../../components/Icons/MoneyIcon";
import VideoPlayIcon from "../../components/Icons/VideoPlayIcon";
import WalletIcon from "../../components/Icons/WalletIcon";
import Layout from "../../components/CreatorLayout/Layout";

import { Tabs } from "react-tabs";
import Tab from "react-tabs/lib/components/Tab";
import TabList from "react-tabs/lib/components/TabList";
import TabPanel from "react-tabs/lib/components/TabPanel";
import EyeIcon from "../../components/Icons/EyeIcon";
import VideoTimeIcon from "../../components/Icons/VideoTimeIcon";

const Dashboard = () => {
    return (
        <Layout>
            <div className="pb-20">
                <div className="grow py-2 mb-3">
                    <h1 className="text-xl font-medium  ">Dashboard</h1>
                    <p className="text-[#7F8691] text-base">
                        View all activities on your zesha videos
                    </p>
                </div>

                <div className="mb-7">
                    <div className="grid grids-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div className="shadow_main w-full bg-white relative py-8 rounded-lg flex flex-col justify-between">
                            <div className="px-6 flex items-center justify-start gap-3 w-full">
                                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-3 transition duration-200 ease">
                                    <WalletIcon />
                                </span>
                                <div className="flex items-start justify-start flex-col w-full">
                                    <h5 className="text-[#344054] text-xl font-bold">
                                        2,560 TFUEL{" "}
                                        <span className="text-[#7F8691] text-sm font-normal">
                                            ~ $2,560
                                        </span>
                                    </h5>
                                    <span className="text-[#7F8691] text-sm">
                                        Wallet balance
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="shadow_main w-full bg-white relative py-8 rounded-lg flex flex-col justify-between">
                            <div className="px-6 flex items-center justify-start gap-3 w-full">
                                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-3 transition duration-200 ease">
                                    <MoneyIcon />
                                </span>
                                <div className="flex items-start justify-start flex-col w-full">
                                    <h5 className="text-[#344054] text-xl font-bold">
                                        9,500 TFUEL{" "}
                                        <span className="text-[#7F8691] text-sm font-normal">
                                            ~ $2,560
                                        </span>
                                    </h5>
                                    <span className="text-[#7F8691] text-sm">
                                        Wallet balance
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="shadow_main w-full bg-white relative py-8 rounded-lg  flex flex-col justify-between">
                            <div className="px-6 flex items-center justify-start gap-3 w-full">
                                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-3 transition duration-200 ease">
                                    <VideoPlayIcon />
                                </span>
                                <div className="flex items-start justify-start flex-col w-full">
                                    <h5 className="text-[#344054] text-xl font-bold">
                                        800
                                    </h5>
                                    <span className="text-[#7F8691] text-sm">
                                        Video views
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-full pb-24 px-4 md:px-6  bg-white mb-7 rounded-lg">
                    <div className="border-b border-[#EEEFF0] w-full mb-5 py-3">
                        <h4 className="text-[#344054] font-medium text-xl text-center py-2">
                            Your videos got X views in the last 28 days
                        </h4>
                    </div>
                    <div className=" w-full  mt-3 md:mt-0 rounded fade-in relative py-6">
                        <Tabs>
                            <div className="flex gap-4 flex-wrap">
                                <div className="flex items-center mb-3 flex-col lg:w-1/4 w-full">
                                    <TabList className="flex flex-col items-start justify-start flex-wrap inner_tab_header  rounded-md gap-3 w-full ">
                                        <Tab className="w-full">
                                            <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#344054]  rounded-lg gap-2">
                                                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                                                    <EyeIcon />
                                                </span>
                                                <b className="text-lg">200</b>{" "}
                                                Views
                                            </button>
                                        </Tab>
                                        <Tab className="w-full">
                                            <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#344054]  rounded-lg gap-2">
                                                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                                                    <VideoTimeIcon />
                                                </span>
                                                <b className="text-lg">200</b>{" "}
                                                Hours watched
                                            </button>
                                        </Tab>
                                        <Tab className="w-full">
                                            <button className="flex items-center justify-start text-sm p-2 px-3 w-full transition-colors duration-200 ease-in-out hover:bg-[#F6F6F7] hover:text-[#344054]  rounded-lg gap-2">
                                                <span className="text-[#046ED1] text-xs rounded-full bg-[#F3F9FF] p-2 transition duration-200 ease">
                                                    <MoneyIcon />
                                                </span>
                                                <b className="text-lg">
                                                    $8,000{" "}
                                                </b>
                                                Earnings
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
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
