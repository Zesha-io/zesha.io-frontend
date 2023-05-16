import Link from 'next/link';
import React from 'react';
import UserProfileDropdown from '../Dropdowns/UserProfileDropdown';
import AddIcon from '../Icons/AddIcon';
import ProfileIcon from '../Icons/ProfileIcon';
import SearchIcon from '../Icons/SearchIcon';
import TagsIcon from '../Icons/TagsIcon';
import ToggleIcon from '../Icons/ToggleIcon';

const Navbar = ({ handleSidebarToggle, toggleSidebar }) => {
  return (
    <>
      <div className="header py-3 w-full  h-20 flex items-center bg-white">
        <div className="container mx-auto flex items-center justify-between gap-8 md:px-4 px-4 lg:px-12  ">
          <div className="flex flex-row   grow gap-5">
            {/* <button
              type="button"
              className="text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600 my-4 bg-border_cl border-gray-300 text-lg px-1 rounded-md mobile-menu-btn"
              aria-label="toggle menu"
            >
              <div className="bar-one"></div>
              <div className="bar-two"></div>
              <div className="bar-three"></div>
            </button> */}
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

            <div className="mt-1 relative rounded-full flex-1  items-center grow flex h-12 w-full ">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-full">
                <span className="text-gray-500 px-3">
                  <SearchIcon />
                </span>
              </div>
              <input
                type="search"
                name="search_video"
                id="search_video"
                className=" py-2 px-4  block w-full pl-12 pr-12 sm:text-sm rounded-full h-full focus:outline-none focus:border-gray-400 bg-[#F4F4F5]"
                placeholder="Search video"
                autoComplete="off"
              />
            </div>
          </div>
          {/* <div className="flex items-center justify-end gap-1 md:gap-5 px-1 md:px-4">

          </div> */}
          <div className="font-normal flex items-center justify-end flex-row gap-8 lg:w-4/12">
            <UserProfileDropdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
