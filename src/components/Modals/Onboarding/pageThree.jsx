import Image from 'next/image';
import React from 'react';
import OnboardStepper from './OnboardStepper';

const PageThree = ({ handleClick, currentStep, steps }) => {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center mb-6 fade-in py-3 transition duration-200 ease-linear">
          <div className="grow text-center fade-in">
            <div className="flex items-center justify-center bg-[#EAF3FC] h-48 w-full rounded-2xl">
              <Image
                src={'/images/onboardgifs/visual-video.gif'}
                height={400}
                width={130}
                priority
                alt="delete gif"
              />
            </div>
            <h1 className="text-lg font-semibold mt-3 mb-2 text-[#344054]">
              Video recommendations
            </h1>

            <p className="text-sm text-[#7F8691] transition duration-200 ease-linear">
              Get lost in a world of entertainment with our diverse and dynamic
              video recommendations and you will never run out of great contents
              to watch.
            </p>
          </div>
        </div>
        <div className='fade-in'>
          <OnboardStepper steps={steps} currentStep={currentStep} />
        </div>

        <div className="flex items-center gap-4 mt-5 flex-row w-full text-sm">
          <button
            type="button"
            className="px-4 py-3 bg-[#EBECED] text-[#344054]  rounded-lg w-full"
            onClick={() => handleClick()}
          >
            Skip
          </button>
          <button
            className="px-4 py-3  bg-[#046ED1] text-white rounded-lg w-full"
            type="button"
            onClick={() => handleClick('next')}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PageThree;
