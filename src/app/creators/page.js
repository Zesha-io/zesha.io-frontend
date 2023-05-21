/* eslint-disable react/no-unescaped-entities */

'use client';

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Lotie from '@/components/lottie';
import CreatorsAccordion from '@/components/Accordions/CreatorsAccordion';
import Image from 'next/image';

const Creators = () => {
  return (
    <>
      <Layout>
        <section className=" py-12 lg:pt-20 lg:pb-12 ">
          <div className="container mx-auto px-6 max-w-7xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center ">
              <div className="w-3/2">
                <div>
                  <h1 className="text-7xl font-bold font-['Recoleta'] text-[#0B0A1D]">
                    <span className="text-[#F93D3D]">Earn</span> from creating
                    the content you <span className="text-[#F93D3D]">love</span>
                  </h1>
                </div>
                <div className="mb-10 mt-5">
                  <p className="text-md">
                    Zesha allows you to monetize your videos, get paid for ads
                    and premium content you create, and collect tips and
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
                  src={'/images/des.svg'}
                  height={50}
                  width={50}
                  
                  className="absolute bottom-44 left-0"
                />
                <Image
                  src={'/images/music.svg'}
                  height={100}
                  width={100}
                  
                  className="absolute top-10 left-32"
                />
                <Image
                  src={'/images/music2.svg'}
                  height={30}
                  width={30}
  
                  className="absolute bottom-0 left-60"
                />
                <div className="flex items-center justify-end">
                  <Image
                    src={'/images/creator-mainimage.png'}
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#F8F7F7"
              fill-opacity="1"
              d="M0,288L60,256C120,224,240,160,360,160C480,160,600,224,720,234.7C840,245,960,203,1080,186.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>

        <section className="bg-[#F8F7F7] py-4 features__section">
          <div className="container mx-auto px-6 max-w-7xl ">
            <div>
              <div className="mb-9 text-center max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold font-['Recoleta'] text-[#1E2428]">
                  Imagine a world where creators{' '}
                  <span className="text-[#F93D3D]">earn</span> from creating and
                  engaging with the content they{' '}
                  <span className="text-[#F93D3D]">love</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 py-14 gap-10 items-center">
                <div className="flex items-center justify-center relative">
                  <div className="features-img" style={{ height: '250px' }}>
                    <Image
                      src={'/images/tran1.svg'}
                      width={250}
                      height={250}
                      className="absolute bottom-20 z-10"
                    />
                    <Lotie src={'/lotiefiles/red-coin-pouch.json'} />
                  </div>
                </div>
                <div>
                  <div className="pl-0 md:pl-0 lg:pl-16">
                    <h3 className="text-xl font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                      Earn from your first view
                    </h3>
                    <p className="mb-3 text-base">
                      Earn from day one on Zesha! Unlike other platforms, you
                      don't need a large following to start earning - you get
                      paid for each view and ad engagement on your videos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 py-14 gap-10 items-center">
                <div className="order-last md:order-first">
                  <div className="pr-0 lg:pr-16">
                    <h3 className="text-xl font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                      Get a bigger slice of the pie
                    </h3>
                    <p className="mb-3 text-base">
                      At Zesha, we believe that your hard work deserves to be
                      rewarded fairly, which is why we offer a 70% share of ad
                      revenues on your videos.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="features-img" style={{ height: '250px' }}>
                    <Lotie src={'/lotiefiles/pie-chart.json'} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 py-14 gap-10 items-center">
                <div className="flex items-center justify-center relative">
                  <div className="features-img " style={{ height: '250px' }}>
                    <Image
                      src={'/images/Cards.svg'}
                      height={250}
                      width={250}
                      className="absolute left-0 bottom-0"
                    />
                    <Lotie src={'/lotiefiles/making-money.json'} />
                  </div>
                </div>
                <div>
                  <div className="pl-0 md:pl-0 lg:pl-16">
                    <h3 className="text-xl font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                      Monetization tools you won&apos;t find elsewhere
                    </h3>
                    <p className="mb-3 text-base">
                      With Zesha, you don&apos;t just earn from ads. We offer
                      multiple revenue streams - tips, NFTs, and subscriptions -
                      in addition to ad earnings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 py-14 gap-10 items-center">
                <div className="order-last md:order-first">
                  <div className="pr-0 lg:pr-16">
                    <h3 className="text-xl font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                      Redeem your earnings for cash
                    </h3>
                    <p className="mb-3 text-base">
                      Redeem your earnings for cash, gift cards, or donations to
                      support your favorite causes, and turn your passion into
                      profit.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="features-img">
                    <Lotie src={'/lotiefiles/wallet-money-added.json'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F8F7F7"
            fill-opacity="1"
            d="M0,288L60,256C120,224,240,160,360,160C480,160,600,224,720,234.7C840,245,960,203,1080,186.7C1200,171,1320,181,1380,186.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>

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

              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 py-14 gap-10 items-center justify-center gap-y-12">
                  <div className="text-center py-4">
                    <div className="px-12">
                      <div className="flex items-center justify-center w-full">
                        <Image
                          src={'/images/Image12.svg'}
                          width={300}
                          height={250}
                        />
                      </div>

                      <h3 className="text-xl font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                        Create an account
                      </h3>
                      <p className="mb-3 text-base">
                        Sign up to Zesha with your Google account, and
                        we&apos;ll instantly create a wallet for you.
                      </p>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <div className="px-12">
                      <div className="flex items-center justify-center w-full">
                        <Image
                          src={'/images/Image15.svg'}
                          width={300}
                          height={250}
                        />
                      </div>
                      <h3 className="text-xl font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                        Add your channel details
                      </h3>
                      <p className="mb-3 text-base">
                        Sign up to Zesha with your Google account, and
                        we&apos;ll instantly create a wallet for you.
                      </p>
                    </div>
                  </div>
                  <div className="text-center px-12 py-4">
                    <div className="">
                      <div className="flex items-center justify-center w-full">
                        <Image
                          src={'/images/Image13.svg'}
                          width={300}
                          height={250}
                        />
                      </div>
                      <h3 className="text-xl font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                        Payout to
                      </h3>
                      <p className="mb-3 text-base">
                        Sign up to Zesha with your Google account, and
                        we&apos;ll instantly create a wallet for you.
                      </p>
                    </div>
                  </div>
                  <div className="text-center px-12 py-4">
                    <div className="">
                      <div className="flex items-center justify-center w-full">
                        <Image
                          src={'/images/Image14.svg'}
                          width={300}
                          height={250}
                        />
                      </div>
                      <h3 className="text-xl font-semibold font-['Recoleta'] text-[#1E2428] mb-2">
                        Start earning
                      </h3>
                      <p className="mb-3 text-base">
                        Sign up to Zesha with your Google account, and
                        we&apos;ll instantly create a wallet for you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-9 mx-auto px-6 max-w-lg">
              <h2 className="text-center text-[#1E2428] font-semibold font-['Recoleta'] text-3xl">
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
              <button className="rounded-lg flex items-center gap-2 px-5 py-2 text-md bg-[#046ED1] text-white border border-[#046ED1] z-20">
                Join Zesha
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
};

export default Creators;
