'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ChromeIcon from '../Icons/ChromeIcon';

const Footer = () => {
  return (
    <>



      <div className="bg-[#071B34] w-full">
        <div className="max-w-7xl container mx-auto px-6 py-8">
          <div className="top-footer grid grid-cols-5 py-12">
            <div className="col-span-2">
              <Link
                href="/"
                className="text-xl text-white font-semibold font-heading"
              >
                <Image
                  src={'/images/Logo-white.svg'}
                  alt={'logo'}
                  width={100}
                  height={100}
                  priority
                />
              </Link>
            </div>
            <div>
              <h4 className="text-white mb-3 text-lg font-semibold">Zesha</h4>
              <ul className="space-y-2 text-white font-normal text-sm">
                <li>
                  <Link href={'/'}>Extension</Link>
                </li>
                <li>
                  <Link href={'/'}>FAQs</Link>
                </li>
                <li>
                  <Link href={'/creators'}>Creators</Link>
                </li>
                <li>
                  <Link href={'/'}>Advertise</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-3 text-lg font-semibold">Legal</h4>
              <ul className="space-y-2 text-white font-normal text-sm">
                <li>
                  <Link href={'/'}>Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link href={'/'}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={'/'}>Creator Terms</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-3 text-lg font-semibold">Support</h4>
              <ul className="space-y-2 text-white font-normal text-sm">
                <li>
                  <Link href={'/'}>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="bottom-footer border-t border-[#96949458] pt-5">
            <p className="text-[#D9D4D4]">Copyright &copy; by Zesha</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
