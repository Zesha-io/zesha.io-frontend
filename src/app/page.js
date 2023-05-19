"use client";

import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import ChromeIcon from "@/components/Icons/ChromeIcon";
// import 'react-tabs/style/react-tabs.css';

export default function Home() {
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
                                        from doing what you{" "}
                                        <span className="text-[#F93D3D]">
                                            love
                                        </span>
                                    </h1>
                                </div>
                                <div className="mb-10 mt-5">
                                    <p className="text-md">
                                        With Zesha, you can earn rewards while
                                        enjoying the content you love.
                                    </p>
                                </div>

                                <div className="flex items-center h-full w-full justify-start gap-3 flex-wrap">
                                    <button className="rounded-lg flex items-center gap-2 px-5 py-3 text-md bg-[#046ED1] text-white border border-[#046ED1]">
                                        <span className="text-[#046ED1]">
                                            <ChromeIcon />
                                        </span>
                                        Add to Chrome
                                    </button>

                                    <Link
                                        href="/creators"
                                        className="rounded-lg px-5 py-4 text-md border border-[#046ED1] text-[#046ED1]"
                                    >
                                        For Creators
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-4 bg-[#FAF9F4] how__it__works">
                    <div className="container mx-auto px-6 max-w-7xl ">
                        <div className="py-14">
                            <div className="mb-9">
                                <h2 className="text-center text-[#1E2428] font-semibold font-['Recoleta'] text-4xl">
                                    How it Works
                                </h2>
                                <p className=" text-center text-md">
                                    How to start earning from Zesha
                                </p>
                            </div>

                            <div>
                                <div className="grid grid-cols-1 py-14 gap-10 md:grid-cols-2">
                                    <div className="order-last md:order-first">
                                        <div className="pr-0 lg:pr-16">
                                            <h3 className="text-xl font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                                                One-click set-up
                                            </h3>
                                            <p className="mb-3 text-base">
                                                Getting started on Zesha is
                                                easy-peasy. Just install the
                                                Zesha Chrome Extension in
                                                one-click, and sign up with your
                                                social account.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end">
                                        <div className="features-img"></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 py-14 gap-10 md:grid-cols-2">
                                    <div className="order-last md:order-first">
                                        <div className="pr-0 lg:pr-16">
                                            <h3 className="text-xl font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                                                Get high-quality recommendations
                                            </h3>
                                            <p className="mb-3 text-base">
                                                Set your interests, and
                                                we&apos;ll recommend engaging,
                                                high-quality videos from your
                                                favorite content creators based
                                                on your preferences
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end">
                                        <div className="features-img"></div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 py-14 gap-10 md:grid-cols-2">
                                    <div className="order-last md:order-first">
                                        <div className="pr-0 lg:pr-16">
                                            <h3 className="text-xl font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                                                Watch, engage, and get paid!
                                            </h3>
                                            <p className="mb-3 text-base">
                                                Share revenues with your
                                                favorite creators when you
                                                engage with ads on their videos!
                                                Get paid in TFUEL, and easily
                                                withdraw using gift cards, or
                                                even donate to your favorite
                                                cause!
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end">
                                        <div className="features-img"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" py-20 features__section">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div>
                            <div className="mb-9 mx-auto text-center max-w-xl">
                                <h2 className="text-center text-[#1E2428] font-semibold font-['Recoleta'] text-3xl mb-3">
                                    Features
                                </h2>
                                <p className="text-center text-md">
                                    Imagine a world where creators and viewers
                                    earn from creating and engaging with the
                                    content they love. We&apos;re taking back
                                    the power from the big guns!
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-y-4 gap-x-4">
                                <div className="col-span-2 py-16 gap-10  bg-[#046ED1] text-white px-4 lg:px-12 rounded-lg">
                                    <div className="order-last md:order-first">
                                        <div className="pr-0 lg:pr-16">
                                            <h3 className="text-xl font-semibold font-['Recoleta']  mb-2">
                                                Distraction-free mode
                                            </h3>
                                            <p className="mb-3 text-base">
                                                Maximize internet time with
                                                distraction-free mode. We
                                                recommend videos at specific
                                                times and let you watch in
                                                overlay mode while browsing,
                                                zero distractions.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end">
                                        <div className="features-img"></div>
                                    </div>
                                </div>
                                <div className="col-span-2 lg:col-span-1 py-16 gap-10  bg-[#F4F4F4] px-4 lg:px-12 rounded-lg">
                                    <div className="order-last md:order-first">
                                        <div className="pr-0 lg:pr-16">
                                            <h3 className="text-xl font-semibold font-['Recoleta']  mb-2">
                                                AI-based recommendations
                                            </h3>
                                            <p className="mb-3 text-base">
                                                Zesha's AI suggests personalized
                                                videos based on your interests
                                                and viewing habits, ensuring
                                                that you only watch what you
                                                really love.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end">
                                        <div className="features-img"></div>
                                    </div>
                                </div>
                                <div className="col-span-2 lg:col-span-1 py-16 gap-10  bg-[#F57373] text-white px-4 lg:px-12 rounded-lg">
                                    <div className="order-last md:order-first">
                                        <div className="pr-0 lg:pr-16">
                                            <h3 className="text-xl font-semibold font-['Recoleta']  mb-2">
                                                Real-life rewards
                                            </h3>
                                            <p className="mb-3 text-base">
                                                You can redeem your earnings in
                                                the form of gift cards or
                                                exclusive Zesha offers. You can
                                                also choose to donate to your
                                                favorite charity or causes.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end">
                                        <div className="features-img"></div>
                                    </div>
                                </div>

                                <div className="col-span-2 py-16 gap-10  bg-[#043460] text-white px-4 lg:px-12 rounded-lg">
                                    <div className="order-last md:order-first">
                                        <div className="pr-0 lg:pr-16">
                                            <h3 className="text-xl font-semibold font-['Recoleta']  mb-2">
                                                Support creators
                                            </h3>
                                            <p className="mb-3 text-base">
                                                Apart from sharing ad revenues,
                                                reward your favorite creators
                                                with ZeshaTips™, premium
                                                subscriptions, and NFTs. Use
                                                TFUEL to pay and make a
                                                difference!
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end">
                                        <div className="features-img"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div>
                    <div className="flex items-center justify-between w-full py-5 px-6 max-w-7xl mx-auto container flex-wrap">
                        <div className="">
                            <h1 className="font-['Recoleta'] text-3xl">
                                Are you a creator?
                            </h1>
                            <p>We&apos;ve got tons of benefits for you!</p>
                        </div>

                        <Link
                            href="/creators/auth/signup"
                            className="rounded-lg px-5 py-4 text-md bg-[#046ED1] text-white border border-[#046ED1]"
                        >
                            Join as a creator
                        </Link>
                    </div>
                </div>

                <section className=" py-14">
                    <div className="container mx-auto px-6 bg-[#FAF9F4] max-w-4xl rounded-lg">
                        <div className="mb-9 py-4">
                            <h2 className="text-center text-[#1E2428] font-semibold font-['Recoleta'] text-3xl">
                                Hear what others have to say
                            </h2>
                        </div>

                        <div className="flex items-center justify-center mx-auto max-w-3xl"></div>
                    </div>
                </section>
                <section className="py-14">
                    <div className="container mx-auto px-6 max-w-lg">
                        <div className="mb-9">
                            <h2 className="text-center text-[#1E2428] font-semibold font-['Recoleta'] text-3xl">
                                Questions we frequently get asked
                            </h2>
                        </div>

                        <div className="flex items-center justify-center mx-auto max-w-3xl"></div>
                    </div>
                </section>

                {/* cta */}
                <div className="my-8 py-4">
                    <div className="container max-w-5xl mx-auto bg-[#043460] py-14 rounded-lg">
                        <div className="flex flex-col items-center gap-3 text-white">
                            <h2 className="text-center text-white font-semibold font-['Recoleta'] text-2xl">
                                Join Zesha and start earning now!
                            </h2>
                            <button className="rounded-lg flex items-center gap-2 px-5 py-2 text-md bg-[#046ED1] text-white border border-[#046ED1]">
                                <span className="text-[#046ED1]">
                                    <ChromeIcon />
                                </span>
                                Add to Chrome - It&apos;s free
                            </button>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
