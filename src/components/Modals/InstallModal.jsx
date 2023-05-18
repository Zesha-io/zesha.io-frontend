import Image from 'next/image';
import React from 'react';
import BoxRecieveIcon from '../Icons/BoxRecieveIcon';
import CloseIcon from '../Icons/CloseIcon';

const InstallModal = ({ show, dismiss, item }) => {
  return (
    <>
    {/* ${show ? 'show' : ''} */}
      <div className={`modal__box  `}>
        <div className="modal__box-wrapper shadow-lg rounded-2xl">
          <div className="flex items-center justify-center mb-6">

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
            <div className="flex items-start justify-start gap-3 w-full">
              <span className="text-[#046ED1] text-xs rounded-full">
                <Image src={'/images/chrome.png'} width={40} height={40} />
              </span>
              <div className="flex items-start justify-start flex-col w-full">
                <h5 className="text-[#344054] text-xl font-bold">
                  Install Chrome extension
                </h5>
                <span className="text-[#7F8691] text-sm">
                  Add our extension to get started on your journey
                </span>
              </div>
            </div>

            <div className='my-4 mx-auto max-w-sm '>
              <button
                className="px-4 py-3  bg-[#046ED1] text-white rounded-lg w-full text-sm flex items-center justify-center gap-2 "
              >
                <BoxRecieveIcon/>
                Install Chrome extension
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstallModal;
