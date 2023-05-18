"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useWeb3Auth from "@/hooks/useWeb3Auth";

export default function SocialLoginBtns({ signup }) {
    const { login } = useWeb3Auth(
        `${process.env.NEXT_PUBLIC_BASE_URL}/creator`
    );

    return (
        <div className="flex flex-col gap-3">
            <button
                onClick={() => login("google")}
                type="button"
                className="flex items-center gap-4 justify-center px-7 py-3 text-[#344054] font-medium text-sm leading-snug  rounded-lg  bg-white  focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full h-12 border border-[#D0D5DD]"
            >
                <Image
                    src={"/images/socialImages/GoogleIcon.svg"}
                    alt={"google-icon"}
                    width={20}
                    height={20}
                    priority
                />
                {signup ? "Sign up " : "Sign in "} with Google
            </button>
            <button
                onClick={() => login("facebook")}
                type="button"
                className="flex items-center gap-4 justify-center px-7 py-3 text-[#344054] font-medium text-sm leading-snug  rounded-lg  bg-white  focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full h-12 border border-[#D0D5DD]"
            >
                <Image
                    src={"/images/socialImages/FacebookIcon.svg"}
                    alt={"facebook-icon"}
                    width={20}
                    height={20}
                    priority
                />
                {signup ? "Sign up " : "Sign in "}with Facebook
            </button>
        </div>
    );
}
