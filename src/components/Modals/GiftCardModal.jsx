import React from 'react';
import CloseIcon from '../Icons/CloseIcon';

const GiftCardModal = ({ show, dismiss }) => {
  return (
    <>
      <div className={`modal__box ${show ? 'show' : ''}`}>
        <div className="modal__box-wrapper alert--bx shadow-lg rounded-2xl">
          <button
            className=" flex items-center rounded-full border-2 border-gray-700 absolute top-3 right-2  "
            onClick={dismiss}
          >
            <span className="pointer-events-none flex items-center p-1">
              <CloseIcon />
            </span>
          </button>

          <div className="flex items-center justify-center mb-6 text-center">
            <h1 className="text-base font-semibold mt-3 mb-2 text-[#344054]">
              Gift Cards
            </h1>
          </div>

          <div className="flex items-center justify-center text-center text-6xl">
            0
          </div>
          <div className="border-t border-[#D9D9D9] flex items-center justify-center w-full gap-8 pb-5 pt-2">
            <h5 className="text-sm text-[#344054] font-medium">
              500 TFUEL{' '}
              <span className="text-[#7F8691] text-xs font-normal">~$480</span>
            </h5>
            <h5 className="text-[#7F8691] text-xs">
              Fee{' '}
              <span className="text-sm text-[#344054] font-medium">$0.25</span>
            </h5>
          </div>

          <div className="flex items-start bg-[#E7F1FB] px-3 py-4 rounded-lg w-full gap-2 flex-wrap md:flex-nowrap">
            <h4 className="grow whitespace-nowrap text-sm font-semibold">
              Gift Card Fees
            </h4>

            <div className="text-sm font-normal">
              Neque ullamcorper mattis leo netus integer etiam quis. Non odio
              pellentesque massa pretium facilisis nulla. Sit pharetra porttitor
              nulla id.
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 mt-5 flex-row w-full text-sm">
            <button
              className="px-4 py-3  bg-[#EBECED] text-[#344054] rounded-lg"
              type="button"
              onClick={dismiss}
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-4 py-3 bg-[#046ED1] text-white rounded-lg "
              onClick={dismiss}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiftCardModal;
