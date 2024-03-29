"use client";

import { useSearchParams } from "next/navigation";

import Link from "next/link";
import React, { useState } from "react";
import PageFive from "@/components/Modals/Onboarding/pageFive";
import PageFour from "@/components/Modals/Onboarding/pageFour";
import PageOne from "@/components/Modals/Onboarding/pageOne";
import PageThree from "@/components/Modals/Onboarding/pageThree";
import PageTwo from "@/components/Modals/Onboarding/pageTwo";

export default function WelcomePage() {
    const [currentStep, setCurrentStep] = useState(1);
    const searchParams = useSearchParams();
    const extensionId = searchParams.get("extensionId");

    const steps = [
        "Index",
        "Easy Payouts",
        "Video recommendations",
        "Support Creators",
        "Join our community",
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
        direction === "next" ? newStep++ : newStep--;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <>
            <div className={`main_unboard_box`}>
                <div className="main_unboard_box-wrapper  onboard--bx shadow-lg rounded-2xl">
                    {displayStep(currentStep)}

                    <div className="w-full text-center mt-3">
                        <p
                            className="text-center text-sm"
                        >
                            Open Zesha Chrome extension to continue
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
