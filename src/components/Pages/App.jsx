/* eslint-disable react/no-unescaped-entities */

"use client";

import React from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import ChromeIcon from "@/components/Icons/ChromeIcon";
import Lotie from "@/components/Lottie/Lottie";
import HomeAccordion from "@/components/Accordions/HomeAccordion";
import Image from "next/image";

export default function App() {
    return (
        <>
            <Layout>
                <section className=" py-8 lg:py-20 bg-[#FAF9F4]">
                    <div className="container mx-auto px-3 lg:px-6 max-w-7xl w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
                            <div className="w-full md:w-3/2">
                                <div className="mx-1">
                                    <h1 className="text-[76px] font-bold font-['Recoleta'] text-[#0B0A1D] leading-[76.36px]">
                                        <span className="text-[#F93D3D]">
                                            Earn
                                        </span>{" "}
                                        from doing what you{" "}
                                        <span className="text-[#F93D3D]">
                                            love
                                        </span>
                                    </h1>
                                </div>
                                <div className="mb-10 mt-5 mx-1">
                                    <p className="text-xl font-medium">
                                        With Zesha, you can earn rewards while
                                        enjoying the content you love.
                                    </p>
                                </div>

                                {/* <div className="flex flex items-center h-full w-full justify-start gap-2 flex-wrap items-start">
                                    <button className="relative rounded-lg flex-1s flex-col items-center gap-2s px-4 py-2 text-md bg-[#046ED1] text-white border border-[#046ED1]">
                                        <span className="flex">
                                            <span className="text-[#046ED1]">
                                                <ChromeIcon />
                                                <span className="text-white">
                                                    Add to Chrome
                                                </span>
                                            </span>
                                        </span>
                                        <span
                                            className="underlines text-xs underline-offset-4s absolute "
                                            style={{
                                                bottom: "-1px",
                                                right: "67px",
                                            }}
                                        >
                                            For Viewers{" "}
                                        </span>
                                    </button>

                                    <div className="flex-1">
                                        <Link
                                            href="/creators"
                                            className="rounded-lg px-4 py-4 text-md border border-[#046ED1] text-[#046ED1]"
                                        >
                                            For Creators
                                        </Link>
                                    </div>
                                </div> */}
                                <div className="flex flex items-center h-full w-full justify-start gap-2 flex-wrap items-start">
                                    <button className="rounded-lg  flex items-center px-5 py-2 text-md bg-[#046ED1] text-white border border-[#046ED1]">
                                        <span className="flex flex-initial">
                                            <ChromeIcon />
                                        </span>
                                        <span className="flex flex-col text-white">
                                            <span className="flex font-semibold">
                                                Add to Chrome
                                            </span>
                                            <span className="flex text-xs">
                                                For Viewers
                                            </span>
                                        </span>
                                    </button>

                                    <div className="flex font-semibold">
                                        <Link
                                            href="/creators"
                                            className="rounded-lg px-4 py-4 text-md border border-[#046ED1] text-[#046ED1]"
                                        >
                                            For Creators
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block relative">
                                <Image
                                    src={"/images/des.svg"}
                                    height={50}
                                    width={50}
                                    className="absolute bottom-44 left-0"
                                />
                                <Image
                                    src={"/images/tran2.svg"}
                                    height={250}
                                    width={350}
                                    className="absolute bottom-10 left-0"
                                />

                                <Image
                                    src={"/images/tran3.svg"}
                                    height={250}
                                    width={250}
                                    className="absolute top-32 -right-10"
                                />
                                <div className="flex items-center justify-end">
                                    <Image
                                        src={"/images/main-homeimage.png"}
                                        height={450}
                                        width={500}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-12 mt-12 rounded-lg">
                    <div className="container mx-auto max-w-6xl rounded-lg">
                        <svg
                            id="wave"
                            style={{
                                transform: "rotate(0deg)",
                                transition: "0.3s",
                            }}
                            viewBox="0 0 1440 240"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient
                                    id="sw-gradient-0"
                                    x1="0"
                                    x2="0"
                                    y1="1"
                                    y2="0"
                                >
                                    <stop
                                        stopColor="rgba(252, 230, 175, 1)"
                                        offset="0%"
                                    ></stop>
                                    <stop
                                        stopColor="rgba(252, 230, 175, 1)"
                                        offset="100%"
                                    ></stop>
                                </linearGradient>
                            </defs>
                            <path
                                style={{
                                    transform: "translate(0, 0px)",
                                    opacity: "1",
                                }}
                                fill="url(#sw-gradient-0)"
                                d="M0,120L60,116C120,112,240,104,360,104C480,104,600,112,720,128C840,144,960,168,1080,164C1200,160,1320,128,1440,128C1560,128,1680,160,1800,176C1920,192,2040,192,2160,168C2280,144,2400,96,2520,64C2640,32,2760,16,2880,28C3000,40,3120,80,3240,80C3360,80,3480,40,3600,44C3720,48,3840,96,3960,108C4080,120,4200,96,4320,100C4440,104,4560,136,4680,156C4800,176,4920,184,5040,180C5160,176,5280,160,5400,164C5520,168,5640,192,5760,192C5880,192,6000,168,6120,140C6240,112,6360,80,6480,84C6600,88,6720,128,6840,128C6960,128,7080,88,7200,92C7320,96,7440,144,7560,156C7680,168,7800,144,7920,112C8040,80,8160,40,8280,28C8400,16,8520,32,8580,40L8640,48L8640,240L8580,240C8520,240,8400,240,8280,240C8160,240,8040,240,7920,240C7800,240,7680,240,7560,240C7440,240,7320,240,7200,240C7080,240,6960,240,6840,240C6720,240,6600,240,6480,240C6360,240,6240,240,6120,240C6000,240,5880,240,5760,240C5640,240,5520,240,5400,240C5280,240,5160,240,5040,240C4920,240,4800,240,4680,240C4560,240,4440,240,4320,240C4200,240,4080,240,3960,240C3840,240,3720,240,3600,240C3480,240,3360,240,3240,240C3120,240,3000,240,2880,240C2760,240,2640,240,2520,240C2400,240,2280,240,2160,240C2040,240,1920,240,1800,240C1680,240,1560,240,1440,240C1320,240,1200,240,1080,240C960,240,840,240,720,240C600,240,480,240,360,240C240,240,120,240,60,240L0,240Z"
                            ></path>
                        </svg>
                    </div>

                    <div className="container mx-auto px-6 max-w-6xl bg-[#FCE6AF] relative">
                        <img
                            src={"/images/videoplay.svg"}
                            className="absolute -bottom-36 right-0 lg:-right-20"
                        />
                        <div className="py-14 px-4  md:px-12 lg:px-20  flex items-center justify-center flex-col">
                            <div className="mb-4">
                                <h2 className="text-center text-[#1E2428] font-semibold font-['Recoleta'] text-[44px]">
                                    Creating a more inclusive web
                                </h2>
                            </div>
                            <div>
                                <p className=" text-center text-[22px] font-medium">
                                    At Zesha, we're on a mission to empower
                                    creators to make an impact with their
                                    content while giving viewers the power to
                                    support the content they care about and, at
                                    the same time, earn. Join us in creating a
                                    world where{" "}
                                    <span className="text-[#F93D3D]">
                                        your online time is well spent.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto max-w-6xl rounded-lg mt-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                        >
                            <path
                                fill="#FCE6AF"
                                fillOpacity="1"
                                d="M0,32L60,69.3C120,107,240,181,360,186.7C480,192,600,128,720,112C840,96,960,128,1080,133.3C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                            ></path>
                        </svg>
                    </div>
                </section>

                <section className=" bg-[#FAF9F4] how__it__works">
                    <div className="container mx-auto px-6 max-w-7xl ">
                        <div className="py-14">
                            <div className="mb-9">
                                <h2 className="text-center text-[#1E2428] font-semibold font-['Recoleta'] text-[44px]">
                                    How it Works
                                </h2>
                                <p className=" text-center text-[22px] font-medium">
                                    How to start earning from Zesha
                                </p>
                            </div>

                            <div>
                                <div className="grid grid-cols-1 py-14 gap-10 md:grid-cols-2 items-center">
                                    <div className="order-last md:order-first">
                                        <div className="pr-0 lg:pr-16">
                                            <h3 className="text-[28px] font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
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
                                        <div className="features-img">
                                            <Image
                                                src={"/images/how-image1.svg"}
                                                height={450}
                                                width={500}
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 py-14 gap-10 md:grid-cols-2 items-center">
                                    <div className="order-last md:order-first">
                                        <div className="pr-0 lg:pr-16">
                                            <h3 className="text-[28px] font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
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
                                        <div className="features-img">
                                            <Image
                                                src={"/images/how-image2.svg"}
                                                height={450}
                                                width={500}
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 py-14 gap-10 md:grid-cols-2 items-center">
                                    <div className="order-last md:order-first">
                                        <div className="pr-0 lg:pr-16">
                                            <h3 className="text-[28px] font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
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
                                        <div className="features-img">
                                            <Image
                                                src={"/images/how-image3.svg"}
                                                height={450}
                                                width={500}
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" py-20 features__section">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div>
                            <div className="mb-9 mx-auto text-center max-w-4xl lg:pb-8">
                                <h2 className="text-center text-[#1E2428] font-semibold font-['Recoleta'] text-[44px] mb-3">
                                    Features
                                </h2>
                                <p className="text-center text-[22px] font-medium pb-4">
                                    Imagine a world where creators and viewers
                                    earn from creating and engaging with the
                                    content they love. We&apos;re taking back
                                    the power from the big guns!
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-y-4 gap-x-4 pt-4">
                                <div className="col-span-2 py-16 gap-10  bg-[#046ED1] text-white px-4 lg:px-12 rounded-lg flex items-center justify-between lg:flex-nowrap flex-wrap ">
                                    <div className="order-first w-full lg:w-1/2">
                                        <div className="pr-0 lg:pr-16">
                                            <h3 className="text-[28px] leading-[38.08px] font-semibold font-['Recoleta']  mb-2">
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

                                    <div className="flex items-center justify-center w-full lg:w-1/2">
                                        <div
                                            className="features-img"
                                            style={{ height: "250px" }}
                                        >
                                            <Lotie
                                                src={"/lotiefiles/time.json"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 lg:col-span-1 py-16 gap-10  bg-[#F4F4F4] px-4 lg:px-12 rounded-lg">
                                    <div className="order-last md:order-first">
                                        <div className="pr-0 lg:pr-16">
                                            <h3 className="text-[28px] leading-[38.08px] font-semibold font-['Recoleta']  mb-2">
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

                                    <div className="flex items-center justify-center">
                                        <div
                                            className="features-img"
                                            style={{ height: "250px" }}
                                        >
                                            <Lotie
                                                src={"/lotiefiles/eve.json"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 lg:col-span-1 py-16 gap-10  bg-[#F57373] text-white px-4 lg:px-12 rounded-lg">
                                    <div className="order-last md:order-first">
                                        <div className="pr-0 lg:pr-16">
                                            <h3 className="text-[28px] leading-[38.08px] font-semibold font-['Recoleta']  mb-2">
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

                                    <div className="flex items-center justify-center">
                                        <div
                                            className="features-img"
                                            style={{ height: "250px" }}
                                        >
                                            <Lotie
                                                src={"/lotiefiles/j-dr-01.json"}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-2 py-16 gap-10  bg-[#043460] text-white px-4 lg:px-12 rounded-lg flex items-center justify-between lg:flex-nowrap flex-wrap ">
                                    <div className="order-first w-full lg:w-1/2">
                                        <div className="pr-0 lg:pr-16">
                                            <h3 className="text-[28px] leading-[38.08px] font-semibold font-['Recoleta']  mb-2">
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

                                    <div className="flex items-center justify-center w-full lg:w-1/2">
                                        <div
                                            className="features-img"
                                            style={{ height: "250px" }}
                                        >
                                            <Lotie
                                                src={
                                                    "/lotiefiles/gift-card.json"
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="col-span-2 py-16 gap-10  bg-[#043460] text-white px-4 lg:px-12 rounded-lg">
                  <div className="order-last md:order-first">
                    <div className="pr-0 lg:pr-16">
                      <h3 className="text-xl font-semibold font-['Recoleta']  mb-2">
                       
                      </h3>
                      <p className="mb-3 text-base">
                        
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end">
                    <div className="features-img"></div>
                  </div>
                </div> */}
                            </div>
                        </div>
                    </div>
                </section>

                <div>
                    <div className="flex items-center justify-between w-full py-5 px-6 max-w-7xl mx-auto container flex-wrap gap-2">
                        <div className="">
                            <h1 className="font-['Recoleta'] text-[44px] text-[#1E2428] font-semibold">
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
                    <div className="container mx-auto px-6 bg-[#FAF9F4] max-w-7xl rounded-lg">
                        <div className="mb-9 py-4 ">
                            <h2 className="text-center text-[#1E2428] font-semibold font-['Recoleta'] text-[44px] py-3">
                                Hear what others have to say
                            </h2>
                        </div>

                        <div className="flex items-center justify-center mx-auto max-w-3xl h-80"></div>
                    </div>
                </section>
                <section className="py-14">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="mb-9 mx-auto px-6 max-w-xl">
                            <h2 className="text-center text-[#1E2428] font-semibold font-['Recoleta'] text-[44px]">
                                Questions we frequently get asked
                            </h2>
                        </div>

                        <div className="flex items-center justify-center mx-auto max-w-3xl">
                            <HomeAccordion />
                        </div>
                    </div>
                </section>

                {/* cta */}
                <div className="my-8 py-4 px-4">
                    <div className="container max-w-5xl mx-auto bg-[#043460] py-14 rounded-lg relative">
                        {/* deco-left */}
                        <img
                            src="/images/ctasvgs/bg.svg"
                            className="absolute left-0 bottom-0 pointer-events-none rounded-lg overflow-hidden"
                        />
                        <img
                            src="/images/ctasvgs/bg1.svg"
                            className="absolute left-0 top-4 pointer-events-none"
                        />
                        <img
                            src="/images/ctasvgs/bg6.svg"
                            className="absolute left-48 bottom-6 pointer-events-none rounded-lg overflow-hidden hidden md:block"
                        />
                        <div className="flex flex-col items-center gap-3 text-white">
                            <h2 className="text-center text-white font-semibold font-['Recoleta'] text-2xl z-20">
                                Join Zesha and start earning now!
                            </h2>
                            <button className="rounded-lg flex items-center gap-2 px-5 py-2 text-md bg-[#046ED1] text-white border border-[#046ED1] z-20">
                                <span className="text-[#046ED1]">
                                    <ChromeIcon />
                                </span>
                                Add to Chrome - It&apos;s free
                            </button>
                        </div>

                        {/* deco-right */}
                        <img
                            src="/images/ctasvgs/bg3.svg"
                            className="absolute right-0 top-10 pointer-events-none rounded-lg overflow-hidden z-10  hidden md:block"
                        />
                        <img
                            src="/images/ctasvgs/bg4.svg"
                            className="absolute right-0 bottom-0 pointer-events-none rounded-lg overflow-hidden hidden md:block"
                        />
                        <img
                            src="/images/ctasvgs/bg5.svg"
                            className="absolute right-60 bottom-4 pointer-events-none rounded-lg overflow-hidden hidden md:block"
                        />
                        <img
                            src="/images/ctasvgs/bg6.svg"
                            className="absolute right-60 top-6 pointer-events-none rounded-lg overflow-hidden hidden md:block"
                        />
                    </div>
                </div>
            </Layout>
        </>
    );
}
