"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import useWeb3Auth from "@/hooks/useWeb3Auth";

const Layout = ({ children }) => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isMininmized, setIsMinimized] = useState(false);

    const { account, logout } = useWeb3Auth(
        `${process.env.NEXT_PUBLIC_BASE_URL}/creator`
    );
    const toggleSidebar = () => {
        setIsMinimized(!isMininmized);
    };

    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };


    return (
        <>
            {account && (
                <div className="h-screen flex flex-row justify-start">
                    <Sidebar
                        toggleCollapse={toggleCollapse}
                        isMininmized={isMininmized}
                        toggleSidebar={toggleSidebar}
                    />
                    <div className="flex-1 h-full overflow-y-auto border-l-0">
                        <Navbar
                            handleSidebarToggle={handleSidebarToggle}
                            toggleSidebar={toggleSidebar}
                            account={account}
                            logout={logout}
                        />

                        <div className="main-wrapper ">
                            <div className="h-screen py-10 px-4 md:px-12">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Layout;
