import Image from "next/image";
import React from "react";
import OnboardStepper from "./OnboardStepper";
import Link from "next/link";

const PageFive = ({ handleClick, currentStep, steps }) => {
    return (
        <>
            <div className="">
                <div className="flex items-center justify-center mb-6 fade-in py-3 transition duration-200 ease-linear">
                    <div className="grow text-center fade-in ">
                        <div className="flex items-center justify-center bg-[#EAF3FC] h-48 w-full rounded-2xl">
                            <Image
                                src={"/images/onboardgifs/discord.gif"}
                                height={400}
                                width={130}
                                priority
                                alt="delete gif"
                            />
                        </div>
                        <h1 className="text-lg font-semibold mt-3 mb-2 text-[#344054]">
                            <Link href="https://discord.gg/sjMTCGPjzM">
                                Join our community
                            </Link>
                        </h1>

                        <p className="text-sm text-[#7F8691] transition duration-200 ease-linear">
                            Find support, encouragement, and inspiration from
                            fellow members by becoming part of our growing
                            community.
                        </p>
                    </div>
                </div>

                <div className="fade-in">
                    <OnboardStepper steps={steps} currentStep={currentStep} />
                </div>

                <div className="flex items-center gap-4 mt-5 flex-row w-full text-sm">
                    <button
                        type="button"
                        className="px-4 py-3 bg-[#EBECED] text-[#344054]  rounded-lg w-full"
                        onClick={() => handleClick()}
                    >
                        Back
                    </button>
                    <button
                        className="px-4 py-3  bg-[#046ED1] text-white rounded-lg w-full"
                        type="button"
                        onClick={() => handleClick("next")}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};

export default PageFive;
