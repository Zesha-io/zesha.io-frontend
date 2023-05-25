'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import CloseIcon from '../Icons/CloseIcon';

const MobileMenu = ({ show, dismiss }) => {
  return (
    <>
      <div
        className={`w-full bg-slate-500 h-full sidemenu ${show ? 'show' : ''}`}
      >
        <nav className="flex items-center flex-col px-4 py-4">
          <div className="w-full text-center flex items-center justify-between mb-5">
            <Link
              href="/"
              className="text-xl text-gray-800 font-semibold font-heading"
            >
              <Image
                src={'/images/Logomain.svg'}
                alt={'logo'}
                width={100}
                height={100}
                priority
              />
            </Link>

            <button onClick={dismiss} className="p-3    ">
              <span>
                <svg
                  className="h-7 w-7 "
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15M5 5L15 15"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="w-full">
            <div className="navbar-menu flex items-start justify-start flex-col gap-4  ">
              <Link
                href="/"
                className="block lg:inline-block mt-4 lg:mt-0 text-[#344054] hover:text-indigo-600 px-5 text-xl w-full"
              >
                Extension
              </Link>

              <Link
                className="block lg:inline-block mt-4 lg:mt-0 text-[#344054] hover:text-indigo-600 px-5 text-xl w-full"
                href="/creators"
              >
                Creators
              </Link>
              <Link
                className="block lg:inline-block mt-4 lg:mt-0 text-[#344054] hover:text-indigo-600 px-5 text-xl w-full"
                href={'https://forms.gle/dXkqhv8UhZvaCKRK9'}
                target={'_blank'}
              >
                Advertise
              </Link>
              <Link
                className="block lg:inline-block mt-4 lg:mt-0 text-[#344054] hover:text-indigo-600 px-5 text-xl w-full"
                href="/support"
              >
                Support
              </Link>

              <Link
                href={`/individual/auth/signup`}
                className="block lg:inline-block mt-4 lg:mt-0 text-white bg-[#046ED1] rounded-lg px-7 py-2 transition duration-300 ease w-full text-center"
              >
                Sign Up
              </Link>

              <Link
                href={`/creator/auth/signup`}
                className="block lg:inline-block mt-4 lg:mt-0 text-[#046ED1] border border-[#046ED1] rounded-lg px-7 py-2 transition duration-300 ease w-full text-center"
              >
                For Creators
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
