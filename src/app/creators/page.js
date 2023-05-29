/* eslint-disable react/no-unescaped-entities */

import React from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Lotie from "@/components/Lottie/Lottie";
import CreatorsAccordion from "@/components/Accordions/CreatorsAccordion";
import Image from "next/image";

export async function generateMetadata({ params }) {
    return {
        title: "For Creators",
    };
}

const Creators = () => {
    return (
        <>
            <Layout>
                <section className=" py-12 lg:pt-20 lg:pb-12 ">
                    <div className="container mx-auto px-6 max-w-7xl w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
                            <div className="w-full md:w-3/2">
                            <div className="flex items-start w-3/4 sm:w-3/4 md:w-3/4 lg:w-2/4">
                                <Link href="https://www.thetavideoapi.com/" target={'_blank'} className="inline-flex items-center w-full justify-center transition font-semibold mb-4 px-3 py-1 rounded-full border border-[#046ED1]  text-[#046ED1] text-xs md:text-sm ">
                                    <span className="relative inline-block w-[9px] md:w-[9.65px] h-[14px] md:h-[15px]">
                                        <Image src={'/images/theta.svg'} fill alt="theta"/>
                                    </span>
                                    <div className="pl-2">Powered by Theta Blockchain</div>
                                </Link>

                                </div>

                                <div>
                                    <h1 className="text-[76px] font-bold font-['Recoleta'] text-[#0B0A1D] leading-[103.36px]">
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
                                    <p className="text-xl font-medium">
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
                            <div className="hidden md:block relative">
                                <Image
                                    src={"/images/des.svg"}
                                    height={50}
                                    width={50}
                                    className="absolute bottom-44 left-0"
                                />
                                <Image
                                    src={"/images/music.svg"}
                                    height={100}
                                    width={100}
                                    className="absolute top-10 left-32"
                                />
                                <Image
                                    src={"/images/music2.svg"}
                                    height={30}
                                    width={30}
                                    className="absolute bottom-0 left-60"
                                />
                                <div className="flex items-center justify-end">
                                    <Image
                                        src={"/images/creator-mainimage.png"}
                                        height={450}
                                        width={500}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div>
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#F8F7F7"
                            fillOpacity="1"
                            d="M0,288L60,256C120,224,240,160,360,160C480,160,600,224,720,234.7C840,245,960,203,1080,186.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                        ></path>
                    </svg> */}
                    <svg
                        id="wave"
                        style={{
                            transform: "rotate(0deg)",
                            transition: "0.3s",
                        }}
                        viewBox="0 0 1440 140"
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
                                    stopColor="rgba(248, 247, 247, 1)"
                                    offset="0%"
                                ></stop>
                                <stop
                                    stopColor="rgba(248, 247, 247, 1)"
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
                            d="M0,84L60,74.7C120,65,240,47,360,39.7C480,33,600,37,720,44.3C840,51,960,61,1080,63C1200,65,1320,61,1440,65.3C1560,70,1680,84,1800,79.3C1920,75,2040,51,2160,42C2280,33,2400,37,2520,35C2640,33,2760,23,2880,23.3C3000,23,3120,33,3240,42C3360,51,3480,61,3600,63C3720,65,3840,61,3960,51.3C4080,42,4200,28,4320,25.7C4440,23,4560,33,4680,37.3C4800,42,4920,42,5040,39.7C5160,37,5280,33,5400,32.7C5520,33,5640,37,5760,39.7C5880,42,6000,42,6120,53.7C6240,65,6360,89,6480,102.7C6600,117,6720,121,6840,121.3C6960,121,7080,117,7200,102.7C7320,89,7440,65,7560,53.7C7680,42,7800,42,7920,44.3C8040,47,8160,51,8280,49C8400,47,8520,37,8580,32.7L8640,28L8640,140L8580,140C8520,140,8400,140,8280,140C8160,140,8040,140,7920,140C7800,140,7680,140,7560,140C7440,140,7320,140,7200,140C7080,140,6960,140,6840,140C6720,140,6600,140,6480,140C6360,140,6240,140,6120,140C6000,140,5880,140,5760,140C5640,140,5520,140,5400,140C5280,140,5160,140,5040,140C4920,140,4800,140,4680,140C4560,140,4440,140,4320,140C4200,140,4080,140,3960,140C3840,140,3720,140,3600,140C3480,140,3360,140,3240,140C3120,140,3000,140,2880,140C2760,140,2640,140,2520,140C2400,140,2280,140,2160,140C2040,140,1920,140,1800,140C1680,140,1560,140,1440,140C1320,140,1200,140,1080,140C960,140,840,140,720,140C600,140,480,140,360,140C240,140,120,140,60,140L0,140Z"
                        ></path>
                    </svg>
                </div>

                <section className="bg-[#F8F7F7] py-4 features__section">
                    <div className="container mx-auto px-6 max-w-7xl ">
                        <div>
                            <div className="mb-9 text-center max-w-4xl mx-auto">
                                <h2 className="text-5xl font-bold font-['Recoleta'] text-[#1E2428]">
                                    Imagine a world where creators{" "}
                                    <span className="text-[#F93D3D]">earn</span>{" "}
                                    from creating and engaging with the content
                                    they{" "}
                                    <span className="text-[#F93D3D]">love</span>
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-10 items-center">
                                <div className="flex items-center justify-center relative">
                                    <div
                                        className="features-img"
                                        style={{ height: "250px" }}
                                    >
                                        <Image
                                            src={"/images/tran1.svg"}
                                            width={250}
                                            height={250}
                                            className="absolute bottom-20 z-10"
                                        />
                                        <Lotie
                                            src={
                                                "/lotiefiles/red-coin-pouch.json"
                                            }
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="pl-0 md:pl-0 lg:pl-16">
                                        <h3 className="text-[28px] font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                                            Earn from your first view
                                        </h3>
                                        <p className="text-base">
                                            Earn from day one on Zesha! Unlike
                                            other platforms, you don't need a
                                            large following to start earning -
                                            you get paid for each view and ad
                                            engagement on your videos.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-10 items-center">
                                <div className="order-last md:order-first">
                                    <div className="pr-0 lg:pr-16">
                                        <h3 className="text-[28px] font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                                            Get a bigger slice of the pie
                                        </h3>
                                        <p className="text-base">
                                            At Zesha, we believe that your hard
                                            work deserves to be rewarded fairly,
                                            which is why we offer a 70% share of
                                            ad revenues on your videos.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center">
                                    <div
                                        className="features-img"
                                        style={{ height: "250px" }}
                                    >
                                        <Lotie
                                            src={"/lotiefiles/pie-chart.json"}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-10 items-center">
                                <div className="flex items-center justify-center relative">
                                    <div
                                        className="features-img "
                                        style={{ height: "250px" }}
                                    >
                                        <Image
                                            src={"/images/Cards.svg"}
                                            height={250}
                                            width={250}
                                            className="absolute left-0 bottom-0"
                                        />
                                        <Lotie
                                            src={
                                                "/lotiefiles/making-money.json"
                                            }
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="pl-0 md:pl-0 lg:pl-16">
                                        <h3 className="text-[28px] font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                                            Monetization tools you won&apos;t
                                            find elsewhere
                                        </h3>
                                        <p className="text-base">
                                            With Zesha, you don&apos;t just earn
                                            from ads. We offer multiple revenue
                                            streams - tips, NFTs, and
                                            subscriptions - in addition to ad
                                            earnings.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 py-12 gap-10 items-center">
                                <div className="order-last md:order-first">
                                    <div className="pr-0 lg:pr-16">
                                        <h3 className="text-[28px] font-semibold  font-['Recoleta'] text-[#1E2428] mb-2">
                                            Redeem your earnings for cash
                                        </h3>
                                        <p className="text-base">
                                            Redeem your earnings for cash, gift
                                            cards, or donations to support your
                                            favorite causes, and turn your
                                            passion into profit.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-center">
                                    <div className="features-img">
                                        <Lotie
                                            src={
                                                "/lotiefiles/wallet-money-added.json"
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <svg
                        id="wave2"
                        style={{
                            transform: "rotate(180deg)",
                            transition: "0.3s",
                        }}
                        viewBox="0 0 1440 140"
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
                                    stopColor="rgba(248, 247, 247, 1)"
                                    offset="0%"
                                ></stop>
                                <stop
                                    stopColor="rgba(248, 247, 247, 1)"
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
                            d="M0,84L60,74.7C120,65,240,47,360,39.7C480,33,600,37,720,44.3C840,51,960,61,1080,63C1200,65,1320,61,1440,65.3C1560,70,1680,84,1800,79.3C1920,75,2040,51,2160,42C2280,33,2400,37,2520,35C2640,33,2760,23,2880,23.3C3000,23,3120,33,3240,42C3360,51,3480,61,3600,63C3720,65,3840,61,3960,51.3C4080,42,4200,28,4320,25.7C4440,23,4560,33,4680,37.3C4800,42,4920,42,5040,39.7C5160,37,5280,33,5400,32.7C5520,33,5640,37,5760,39.7C5880,42,6000,42,6120,53.7C6240,65,6360,89,6480,102.7C6600,117,6720,121,6840,121.3C6960,121,7080,117,7200,102.7C7320,89,7440,65,7560,53.7C7680,42,7800,42,7920,44.3C8040,47,8160,51,8280,49C8400,47,8520,37,8580,32.7L8640,28L8640,140L8580,140C8520,140,8400,140,8280,140C8160,140,8040,140,7920,140C7800,140,7680,140,7560,140C7440,140,7320,140,7200,140C7080,140,6960,140,6840,140C6720,140,6600,140,6480,140C6360,140,6240,140,6120,140C6000,140,5880,140,5760,140C5640,140,5520,140,5400,140C5280,140,5160,140,5040,140C4920,140,4800,140,4680,140C4560,140,4440,140,4320,140C4200,140,4080,140,3960,140C3840,140,3720,140,3600,140C3480,140,3360,140,3240,140C3120,140,3000,140,2880,140C2760,140,2640,140,2520,140C2400,140,2280,140,2160,140C2040,140,1920,140,1800,140C1680,140,1560,140,1440,140C1320,140,1200,140,1080,140C960,140,840,140,720,140C600,140,480,140,360,140C240,140,120,140,60,140L0,140Z"
                        ></path>
                    </svg>
                </div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F8F7F7"
            fillOpacity="1"
            d="M0,288L60,256C120,224,240,160,360,160C480,160,600,224,720,234.7C840,245,960,203,1080,186.7C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg> */}

                <section className="py-4  how__it__works ">
                    <div className="container mx-auto px-6 max-w-7xl ">
                        <div className="py-4">
                            <div className="mb-9">
                                <h2 className="text-center text-[#1E2428] font-semibold font-['Recoleta'] text-[44px]">
                                    How it Works
                                </h2>
                                <p className=" text-center text-[22px] font-medium my-2">
                                    How to start earning from Zesha
                                </p>
                            </div>

                            <div>
                                <div className="grid grid-cols-1 md:grid-cols-2 py-14 gap-10 items-center justify-center gap-y-12 lg:gap-y-28">
                                    <div className="text-center py-4">
                                        <div className="px-12">
                                            <div className="flex items-center justify-center w-full">
                                                <Image
                                                    src={"/images/Image12.svg"}
                                                    width={350}
                                                    height={250}
                                                />
                                            </div>

                                            <h3 className="text-[28px] font-semibold font-['Recoleta'] text-[#1E2428] mt-4 mb-3">
                                                Create an account
                                            </h3>
                                            <p className="mb-3 text-base">
                                                Sign up to Zesha with your
                                                Google account, and we&apos;ll
                                                instantly create a wallet for
                                                you.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <div className="px-12">
                                            <div className="flex items-center justify-center w-full">
                                                <Image
                                                    src={"/images/Image15.svg"}
                                                    width={350}
                                                    height={250}
                                                />
                                            </div>
                                            <h3 className="text-[28px] font-semibold font-['Recoleta'] text-[#1E2428] mt-4 mb-3">
                                                Add your channel details
                                            </h3>
                                            <p className="mb-3 text-base">
                                                Set up your channel name, description and logo to make yourself stand out.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-center px-12 py-4">
                                        <div className="">
                                            <div className="flex items-center justify-center w-full">
                                                <Image
                                                    src={"/images/Image13.svg"}
                                                    width={350}
                                                    height={250}
                                                />
                                            </div>
                                            <h3 className="text-[28px] font-semibold font-['Recoleta'] text-[#1E2428] mt-4 mb-3">
                                                Upload videos
                                            </h3>
                                            <p className="mb-3 text-base">
                                                When uploading your video, make sure to include a catchy title, description and thumbnail.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-center px-12 py-4">
                                        <div className="">
                                            <div className="flex items-center justify-center w-full">
                                                <Image
                                                    src={"/images/Image14.svg"}
                                                    width={350}
                                                    height={250}
                                                />
                                            </div>
                                            <h3 className="text-[28px] font-semibold font-['Recoleta'] text-[#1E2428] mt-4 mb-3">
                                                Start earning
                                            </h3>
                                            <p className="mb-3 text-base">
                                                View and payout your earnings from your Zesha Creator dashboard!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className=" ">
                    <div className="container mx-auto px-6 bg-[#FAF9F4] max-w-7xl rounded-lg py-14">
                        <div className="mb-5 py-4 ">
                            <h2 className="text-center text-[#1E2428] font-semibold font-['Recoleta'] text-[44px] ">
                                Hear what others have to say
                            </h2>
                        </div>

                        <div className="flex items-center justify-center mx-auto max-w-3xl h-72 md:h-[500px] w-full py-4">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Idpgjs-20ww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
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
                            <CreatorsAccordion />
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

                        <div className="flex flex-col items-center gap-4 text-white">
                            <h2 className="text-center text-white font-semibold font-['Recoleta'] text-2xl z-20">
                                Empower yourself & start earning
                            </h2>
                            <a
                                href="/creator/auth/signup"
                                className="rounded-lg flex items-center gap-2 px-5 py-2 text-md bg-[#046ED1] text-white border border-[#046ED1] z-20"
                            >
                                Join Zesha
                            </a>
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
};

export default Creators;
