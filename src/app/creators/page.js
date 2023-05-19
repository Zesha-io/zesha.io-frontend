"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

const Creators = () => {
    return (
        <>
            <Layout>
                <section className=" py-12 lg:py-28 bg-[#FAF9F4]">
                    <div className="container mx-auto px-6 max-w-7xl w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
                            <div className="w-3/2">
                                <div>
                                    <h1 className="text-7xl font-bold font-['Recoleta'] text-[#0B0A1D]">
                                        <span className="text-[#F93D3D]">
                                            Earn
                                        </span>{" "}
                                        from creating the content you{" "}
                                        <span className="text-[#F93D3D]">
                                            love
                                        </span>
                                    </h1>
                                </div>
                                <div className="mb-10 mt-5">
                                    <p className="text-md">
                                        Zesha allows you to monetize your
                                        videos, get paid for ads and premium
                                        content you create, and collect tips and
                                        subscriptions from your loyal fans.
                                    </p>
                                </div>

                                <div className="flex items-center h-full w-full justify-start gap-3 flex-wrap">
                                    <Link
                                        href="/creator/auth/login"
                                        className="rounded-lg px-5 py-4 text-md bg-[#046ED1] text-white border border-[#046ED1]"
                                    >
                                        Join Zesha now
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#F8F7F7] py-20 features__section">
                    <div className="container mx-auto px-6 max-w-7xl ">
                        <div>
                            <div className="mb-9 text-center max-w-2xl mx-auto">
                                <h2 className="text-4xl font-bold font-['Recoleta'] text-[#1E2428]">
                                    Imagine a world where creators{" "}
                                    <span className="text-[#F93D3D]">earn</span>{" "}
                                    from creating and engaging with the content
                                    they{" "}
                                    <span className="text-[#F93D3D]">love</span>
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 py-14 gap-10">
                                <div className="flex items-center justify-start">
                                    <div className="features-img"></div>
                                </div>
                                <div>
                                    <div className="pl-0 md:pl-0 lg:pl-16">
                                        <h3 className="text-xl font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                                            Earn from your first view
                                        </h3>
                                        <p className="mb-3 text-base">
                                            Earn from day one on Zesha! Unlike
                                            other platforms, you don't need a
                                            large following to start earning -
                                            you get paid for each view and ad
                                            engagement on your videos.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 py-14 gap-10">
                                <div className="order-last md:order-first">
                                    <div className="pr-0 lg:pr-16">
                                        <h3 className="text-xl font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                                            Get a bigger slice of the pie
                                        </h3>
                                        <p className="mb-3 text-base">
                                            At Zesha, we believe that your hard
                                            work deserves to be rewarded fairly,
                                            which is why we offer a 70% share of
                                            ad revenues on your videos.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end">
                                    <div className="features-img"></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 py-14 gap-10">
                                <div className="flex items-center justify-start">
                                    <div className="features-img"></div>
                                </div>
                                <div>
                                    <div className="pl-0 md:pl-0 lg:pl-16">
                                        <h3 className="text-xl font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                                            Monetization tools you won&apos;t
                                            find elsewhere
                                        </h3>
                                        <p className="mb-3 text-base">
                                            With Zesha, you don&apos;t just earn
                                            from ads. We offer multiple revenue
                                            streams - tips, NFTs, and
                                            subscriptions - in addition to ad
                                            earnings.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 py-14 gap-10">
                                <div className="order-last md:order-first">
                                    <div className="pr-0 lg:pr-16">
                                        <h3 className="text-xl font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                                            Redeem your earnings for cash
                                        </h3>
                                        <p className="mb-3 text-base">
                                            Redeem your earnings for cash, gift
                                            cards, or donations to support your
                                            favorite causes, and turn your
                                            passion into profit.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end">
                                    <div className="features-img"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-4  how__it__works ">
                    <div className="container mx-auto px-6 max-w-7xl ">
                        <div className="py-14">
                            <div className="mb-9">
                                <h2 className="text-center text-[#1E2428] font-semibold font-['Recoleta'] text-3xl">
                                    How it Works
                                </h2>
                                <p className=" text-center text-sm">
                                    How to start earning from Zesha
                                </p>
                            </div>

                            <div></div>
                        </div>
                    </div>
                </section>

                {/* cta */}
                <div className="my-8 py-4">
                    <div className="container max-w-5xl mx-auto bg-[#043460] py-14 rounded-lg">
                        <div className="flex flex-col items-center gap-4 text-white">
                            <h2 className="text-center text-white font-semibold font-['Recoleta'] text-2xl">
                                Empower yourself & start earning
                            </h2>
                            <button className="rounded-lg flex items-center gap-2 px-5 py-2 text-md bg-[#046ED1] text-white border border-[#046ED1]">
                                Join Zesha
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Creators;
