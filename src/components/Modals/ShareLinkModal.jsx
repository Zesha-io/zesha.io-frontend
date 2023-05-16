import Image from 'next/image';
import React from 'react';
import CloseIcon from '../Icons/CloseIcon';

const ShareLinkModal = ({ show, dismiss, item }) => {
  return (
    <>
      <div className={`modal__box ${show ? 'show' : ''}`}>
        <div className="modal__box-wrapper alert--bx shadow-lg rounded-2xl">
          <div className="flex items-center justify-center mb-6">
            <div className="grow text-left">
              <h1 className="text-xl font-semibold mt-3 mb-2 text-[#344054]">
                Share link
              </h1>
            </div>

            <button
              className=" flex items-center rounded-full border-2 border-gray-700 absolute top-3 right-2  "
              onClick={dismiss}
            >
              <span className="pointer-events-none flex items-center p-1">
                <CloseIcon />
              </span>
            </button>
          </div>

          <div>
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
                defaultValue="https://zesha/syqiey4rfw"
              />
            </div>
          </div>

          <div className='py-3 my-3 text-center'>
            <p className='text-[#7F8691] text-base'>or share to</p>
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap w-full text-sm">
            <button className="bg-[#F2F2F4] p-3 rounded-full h-12 w-12 flex items-center justify-center text-[#046ED1] relative">
              <Image
                src={'/images/socialImages/LinkedIn.svg'}
                width={30}
                height={30}
                alt="linkedin-icon"
              />
            </button>

            <button className="bg-[#F2F2F4] p-3 rounded-full h-12 w-12 flex items-center justify-center text-[#046ED1] relative">
              <Image
                src={'/images/socialImages/Telegram.svg'}
                width={30}
                height={30}
                alt="telegram-icon"
              />
            </button>

            <button className="bg-[#F2F2F4] p-3 rounded-full h-12 w-12 flex items-center justify-center text-[#046ED1] relative">
              <Image
                src={'/images/socialImages/Facebook2.svg'}
                width={30}
                height={30}
                alt="facebook-icon"
              />
            </button>

            <button className="bg-[#F2F2F4] p-3 rounded-full h-12 w-12 flex items-center justify-center text-[#046ED1] relative">
              <Image
                src={'/images/socialImages/Twitter.svg'}
                width={30}
                height={30}
                alt="twitter-icon"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareLinkModal;
