"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
    const [dropdown, setDropdown] = useState(false);
    const [getstarted, setGetStarted] = useState(0);
    const ref = useRef();
    const testref = useRef();
    const pathname = usePathname();

    useEffect(() => {
        const handler = (e) => {
            if (dropdown && ref.current && !ref.current.contains(e.target)) {
                setDropdown(false);
            } else if (
                dropdown &&
                testref.current &&
                !testref.current.contains(e.target)
            ) {
                setDropdown(false);
            }
        };

        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onClickGetStarted = () => {
        setGetStarted(!getstarted);
    };
    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(!dropdown);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    return (
        <>
            <header className="shadow-header w-full bg-[#FAF9F4]">
                <div className="container mx-auto max-w-7xl">
                    <nav className="flex  flex-wrap items-center justify-between px-4 py-4">
                        <div className="lg:order-1 w-auto lg:w-1/4 lg:text-center">
                            <Link
                                href="/"
                                className="text-xl text-gray-800 font-semibold font-heading"
                            >
                                <Image
                                    src={"/images/Logomain.svg"}
                                    alt={"logo"}
                                    width={100}
                                    height={100}
                                    priority
                                />
                            </Link>
                        </div>
                        <div className="block lg:hidden">
                            <button className="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500">
                                <svg
                                    className="fill-current h-3 w-3"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:order-2 lg:block w-full lg:w-auto lg:text-center">
                            <div className="navbar-menu flex items-center justify-end gap-4  ">
                                <Link
                                    href="/"
                                    className="block lg:inline-block mt-4 lg:mt-0 text-[#344054] hover:text-indigo-600 px-5"
                                >
                                    Extension
                                </Link>

                                <Link
                                    className="block lg:inline-block mt-4 lg:mt-0 text-[#344054] hover:text-indigo-600 px-5 "
                                    href="/creators"
                                >
                                    Creators
                                </Link>
                                <Link
                                    className="block lg:inline-block mt-4 lg:mt-0 text-[#344054] hover:text-indigo-600 px-5 "
                                    href={"https://forms.gle/dXkqhv8UhZvaCKRK9"} target={'_blank'}
                                >
                                    Advertise
                                </Link>
                                <Link
                                    className="block lg:inline-block mt-4 lg:mt-0 text-[#344054] hover:text-indigo-600 px-5 "
                                    href="/support"
                                >
                                    Support
                                </Link>

                                <Link
                                    href={`/individual/auth/signup`}
                                    className="block lg:inline-block mt-4 lg:mt-0 text-white bg-[#046ED1] rounded-lg px-7 py-2 transition duration-300 ease"
                                >
                                    Sign Up
                                </Link>
                                {/* <Link
                                    href={`${
                                        pathname != "/"
                                            ? pathname == "/creators"
                                                ? "creator"
                                                : "individual"
                                            : "individual"
                                    }/auth/signup`}
                                    className="block lg:inline-block mt-4 lg:mt-0 text-white bg-[#046ED1] rounded-lg px-7 py-2 transition duration-300 ease"
                                >
                                    Sign Up
                                </Link> */}

                                <Link
                                    href={`/creator/auth/signup`}
                                    className="block lg:inline-block mt-4 lg:mt-0 text-[#046ED1] border border-[#046ED1] rounded-lg px-7 py-2 transition duration-300 ease"
                                >
                                    For Creators
                                </Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
