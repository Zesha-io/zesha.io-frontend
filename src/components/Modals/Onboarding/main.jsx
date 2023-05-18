'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import PageFive from './pageFive';
import PageFour from './pageFour';
import PageOne from './pageOne';
import PageThree from './pageThree';
import PageTwo from './pageTwo';
// import { UseContextProvider } from '../../../contexts/NavigationContext';

const Main = ({show, dismiss}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    'Index',
    'Easy Payouts',
    'Video recommendations',
    'Support Creators',
    'Join our community',
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return (
          <PageOne
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 2:
        return (
          <PageTwo
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      case 3:
        return (
          <PageThree
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );

      case 4:
        return (
          <PageFour
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );

      case 5:
        return (
          <PageFive
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        );
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === 'next' ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <>
    {/* ${show ? 'show' : ''} */}
      <div className={`modal__box show`}>
        <div className="modal__box-wrapper  onboard--bx shadow-lg rounded-2xl">
          {displayStep(currentStep)}

          <div className="w-full text-center mt-3">
            <Link
              href="/"
              className="text-center text-[#046ED1] text-sm underline"
            >
              Open Zesha extension to continue
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
