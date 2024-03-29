import React, { useState, useEffect, useRef } from "react";

const OnboardStepper = ({ steps, currentStep }) => {
    const [newStep, setNewStep] = useState([]);
    const stepsRef = useRef();

    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps];
        console.log(newSteps);
        let count = 0;
        while (count < newSteps.length) {
            //current step
            if (count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true,
                };
                count++;
            }

            //step completed
            else if (count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true,
                };
                count++;
            }
            //step pending
            else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false,
                };
                count++;
            }
        }

        return newSteps;
    };

    useEffect(() => {
        const stepsState = steps.map((step, index) =>
            Object.assign(
                {},
                {
                    description: step,
                    completed: false,
                    highlighted: index === 0 ? true : false,
                    selected: index === 0 ? true : false,
                }
            )
        );

        stepsRef.current = stepsState;
        const current = updateStep(currentStep - 1, stepsRef.current);
        setNewStep(current);
    }, [steps, currentStep]);

    const stepsDisplay = newStep.map((step, index) => {
        return (
            <div
                key={index}
                className={
                    index !== newStep.length - 1
                        ? "flex items-center justify-center"
                        : "flex items-center justify-center"
                }
            >
                <div className="relative flex flex-col items-center text-gray-500">
                    <div
                        className={`rounded-full transition duration-500 ease-in-out h-2 w-2 flex items-center justify-center bg-[#EBECEDEB] ${
                            step.selected ? "bg-[#FBBC04] text-white " : ""
                        }`}
                    >
                        {step.completed ? (
                            <span className="text-white font-bold text-xl h-2 w-2 bg-[#FBBC04] rounded-full"></span>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="mx-4 flex justify-center items-center gap-2">
            {stepsDisplay}
        </div>
    );
};
export default OnboardStepper;
