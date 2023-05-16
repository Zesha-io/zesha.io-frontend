import Image from 'next/image';
import React from 'react';
import CloseIcon from '../Icons/CloseIcon';

const ConfirmDeleteModal = ({ show, dismiss, item }) => {
  return (
    <>
      <div className={`modal__box ${show ? 'show' : ''}`}>
        <div className="modal__box-wrapper alert--bx shadow-lg rounded-2xl">
          <div className="flex items-center justify-center mb-6">
            <div className="grow text-center">
              <div className="flex items-center justify-center ">
                <Image
                  src={'/images/delete.gif'}
                  height={400}
                  width={130}
                  alt="delete gif"
                />
              </div>
              <h1 className="text-xl font-semibold mt-3 mb-2 text-[#344054]">
                Sure you want to delete video?
              </h1>

              <p className="text-base text-[#7F8691]">
                There would be no access to this video anymore once deleted
              </p>
            </div>

            <button
              className=" flex items-center rounded-full border-2 border-gray-700 absolute top-3 right-2  "
              onClick={dismiss}
            >
              <span className="pointer-events-none flex items-center p-1">
                <CloseIcon/>
              </span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-4 mt-5 flex-col w-full text-sm">
            <button
              type="button"
              className="px-4 py-3 bg-[#046ED1] text-white rounded-lg w-full"
              onClick={dismiss}
            >
              Sure, delete video
            </button>
            <button
              className="px-4 py-3  bg-[#EBECED] text-[#344054] rounded-lg w-full"
              type="button"
              onClick={dismiss}
            >
              Go back to offer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmDeleteModal;
