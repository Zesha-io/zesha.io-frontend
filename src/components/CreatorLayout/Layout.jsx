'use client';

import React, { useEffect, useState } from 'react';
import InstallModal from '../Modals/InstallModal';
import Main from '../Modals/Onboarding/main';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  // const {data: session} = useSession();

  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isMininmized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMininmized);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <>
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
          />

          <div className="main-wrapper ">
            <div className="h-screen py-10 px-4 md:px-12">{children}</div>
          </div>
        </div>
      </div>
     
      {/* MAIN ONBOARDING */}
      <Main />

      {/* Install extension modal */}
      <InstallModal/>
    </>
  );
};

export default Layout;
