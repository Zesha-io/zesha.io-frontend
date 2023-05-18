"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import useWeb3Auth from "@/hooks/useWeb3Auth";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isMininmized, setIsMinimized] = useState(false);
    const router = useRouter();

    const { account, web3auth } = useWeb3Auth(
        `${process.env.NEXT_PUBLIC_BASE_URL}/creator`
    );
    const toggleSidebar = () => {
        setIsMinimized(!isMininmized);
    };

    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };

    const logout = () => {
        web3auth.logout();
        document.cookie =
            "authorized=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        router.replace(
            `${process.env.NEXT_PUBLIC_BASE_URL}/creator/auth/login`
        );
    };

    useEffect(() => {
        console.log("Account Logged in:", account);
    }, [account]);

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
