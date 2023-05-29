"use client";

import Image from "next/image";
import React from "react";
import Layout from "@/components/IndividualLayout/Layout";

const Referral = () => {
    return (
        <Layout>
            <div className="pb-20">
                <div className="grow py-2 mb-3">
                    <h1 className="text-xl font-medium">Referral</h1>
                    <p className="text-[#7F8691] text-base">
                        Invite your friends to join Zesha
                    </p>
                </div>

                <div className=" py-24 px-4 md:px-6  bg-white mb-7 rounded-lg">
                    <div className="h-full flex items-center justify-center flex-col gap-3 max-w-2xl mx-auto">
                        <div className="flex items-center justify-center ">
                            <Image
                                src={"/images/refer-earn.gif"}
                                height={500}
                                width={160}
                                alt="refer-earn gif"
                            />
                        </div>
                        <div className="mb-2 text-center">
                            <h1 className="text-xl font-medium">
                                Invite your friends to earn with you
                            </h1>
                            <p className="text-[#7F8691] text-base">
                                When you invite friends to join you, you get 5%
                                of their first earnings
                            </p>
                        </div>
                        <div className="w-full">
                            <div className="mt-1 relative rounded-lg flex-1  items-center grow flex h-14 w-full ">
                                <div className="absolute inset-y-0 right-0 pr-2 flex items-center h-full">
                                    <button className="text-white rounded-lg py-3 px-3 bg-[#046ED1] text-xs">
                                        Copy video link
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    name="link"
                                    id="link"
                                    className=" py-3 px-4  block w-full pr-36 sm:text-sm rounded-lg h-full focus:outline-none focus:border-gray-400 border border-[#CBD5E1]"
                                    autoComplete="off"
                                    defaultValue="https://zesha.io/syqiey4rfw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Referral;
