import Link from "next/link";
import React from "react";
import UserProfileDropdown from "../Dropdowns/UserProfileDropdown";
import AddIcon from "../Icons/AddIcon";
import SearchIcon from "../Icons/SearchIcon";
import ToggleIcon from "../Icons/ToggleIcon";

const Navbar = ({ handleSidebarToggle, toggleSidebar, account, logout }) => {
    return (
        account && (
            <>
                <div className="header py-3 w-full  h-20 bg-white flex items-center justify-between">
                    <div className="flex flex-row w-full  gap-5">
                        <button
                            onClick={handleSidebarToggle}
                            className="hover:bg-[#F3F3FE] focus:outline-none px-3 transition duration-200 ease-in-out rounded-md hidden md:block"
                        >
                            <span className="text-[#7F8691]">
                                <ToggleIcon />
                            </span>
                        </button>

                        <button
                            onClick={toggleSidebar}
                            className="hover:bg-[#F3F3FE] focus:outline-none px-3 transition duration-200 ease-in-out rounded-md block md:hidden"
                        >
                            <span className="text-[#7F8691]">
                                <ToggleIcon />
                            </span>
                        </button>

                        <div className="relative rounded-full flex-1  items-center grow flex h-12 w-full lg:w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-full">
                                <span className="text-gray-500 px-3">
                                    <SearchIcon />
                                </span>
                            </div>
                            <input
                                type="search"
                                name="search_video"
                                id="search_video"
                                className=" py-2 px-4  block w-full pl-12 pr-8 sm:text-sm rounded-full h-full focus:outline-none focus:border-gray-400 bg-[#F4F4F5]"
                                placeholder="Search video"
                                autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="container mx-auto flex items-center justify-end gap-8 md:px-4 px-4 lg:px-12 w-full ">
                        <div className="font-normal flex items-center justify-end flex-row gap-3 xl:gap-8 lg:w-4/12">
                            <Link
                                href="/creator/upload-video"
                                className="bg-[#F2F2F4] px-3 py-2 rounded-lg hidden lg:flex whitespace-nowrap justify-center items-center gap-2 upload-btn"
                            >
                                <AddIcon />
                                Upload Video
                            </Link>
                            <UserProfileDropdown
                                account={account}
                                logout={logout}
                                userType={"creator"}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    );
};

export default Navbar;
