"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ChromeIcon from "../Icons/ChromeIcon";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="bg-[#071B34] w-full">
                <div className="max-w-7xl container mx-auto px-6 py-8">
                    <div className="top-footer grid grid-cols-5 py-12">
                        <div className="col-span-2">
                            <Link
                                href="/"
                                className="text-xl text-white font-semibold font-heading"
                            >
                                <Image
                                    src={"/images/Logo-white.svg"}
                                    alt={"logo"}
                                    width={100}
                                    height={100}
                                    priority
                                />
                            </Link>
                        </div>
                        <div>
                            <h4 className="text-white mb-3 text-lg font-semibold">
                                Zesha
                            </h4>
                            <ul className="space-y-2 text-white font-normal text-sm">
                                <li>
                                    <Link href={"/"}>Extension</Link>
                                </li>
                                <li>
                                    <Link href={"/creators"}>Creators</Link>
                                </li>
                                <li>
                                    <Link href={"https://forms.gle/dXkqhv8UhZvaCKRK9"} target={'_blank'}>Advertise</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white mb-3 text-lg font-semibold">
                                Legal
                            </h4>
                            <ul className="space-y-2 text-white font-normal text-sm">
                                <li>
                                    <Link href={"https://pauloladimeji.notion.site/Zesha-io-Terms-Conditions-684d9038a890429ea0a9ddd652d19dc4"} target={'_blank'}>
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"https://pauloladimeji.notion.site/Zesha-io-Privacy-Policy-c230556486bb42f8b5a37df1481e715b"} target={'_blank'}>Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white mb-3 text-lg font-semibold">
                                Support
                            </h4>
                            <ul className="space-y-2 text-white font-normal text-sm">
                                <li>
                                    <Link href="mailto:info@zesha.io">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bottom-footer border-t border-[#96949458] pt-5">
                        <p className="text-[#D9D4D4]">
                            Copyright &copy; {currentYear} by Zesha
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
