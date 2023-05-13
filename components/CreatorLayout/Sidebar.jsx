import React, { useState, useEffect, useContext } from 'react';

import classNames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AddIcon from '../Icons/AddIcon';
import ScreenIcon from '../Icons/ScreenIcon';
import ShareIcon from '../Icons/ShareIcon';
import Image from 'next/image';
import TagsIcon from '../Icons/TagsIcon';
import CloseIcon from '../Icons/CloseIcon';
import DashboardIcon from '../Icons/DashboardIcon';
import VideoPlayIcon from '../Icons/VideoPlayIcon';
import EmptyWalletIcon from '../Icons/EmptyWalletIcon';
import MessageQuestionIcon from '../Icons/MessageQuestionIcon';
import SettingIcon from '../Icons/SettingIcon';
import DashboardIcon2 from '../Icons/DashboardIcon2';

const Sidebar = ({ toggleCollapse, isMininmized, toggleSidebar }) => {
  const [isCollapsible, setIsCollapsible] = useState(true);
  const [isDropdown, setIsDropdown] = useState(true);

  const showDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const router = useRouter();

  const wrapperClasses = classNames(
    'h-full sidebar pb-4 flex justify-between scrollbar-change flex-col overflow-y-auto overflow-x-hidden fixed z-40 md:relative bg-white',
    {
      ['md:w-60']: !toggleCollapse,
      ['md:w-20']: toggleCollapse,
      ['w-0']: !isMininmized,
      ['w-60']: isMininmized,
    }
  );

  const CollapseIconClasses = classNames(
    'p-4 rounded focus:bg-transparent focus-visible:outline-none  bg-white text-[#6C7281] transition 300ms ease hover:text-blue-900',
    {
      'rotate-180 mx-auto flex items-center justify-center': toggleCollapse,
      'right-0 absolute': !toggleCollapse,
      // "opacity-0":!visibility,

      // "opacity-0":!visibility,
    }
  );

  return (
    <>
      <div
        className={wrapperClasses}
        style={{
          transition: 'width 100ms ease-in-out 0s ',
        }}
      >
        <div className="h-full flex flex-col justify-between relative">
          <button
            className=" flex items-center rounded-full border-2 border-gray-900 absolute top-3 right-2 md:hidden  pointer z-20"
            onClick={toggleSidebar}
          >
            <span className="pointer-events-none flex items-center p-1">
              <CloseIcon />
            </span>
          </button>
          <div className="flex flex-col mb-3">
            <div className="flex items-center justify-center py-5 relative h-20 overflow-hidden">
              {!toggleCollapse ? (
                <Link href="/" className="px-3">
                  <Image
                    src={'/images/Logomain.svg'}
                    alt={'logo'}
                    width={80}
                    height={100}
                    priority
                  />
                  {/* <img src="" className="transition 300ms ease" /> */}
                  {/* <Logo className="transition 300ms ease" /> */}
                </Link>
              ) : (
                <Link href="/" className="px-3">
                  <Image
                    src={'/images/LogoIcon.svg'}
                    alt={'logo'}
                    width={30}
                    height={30}
                    priority
                  />
                  {/* <Logo className="transition 300ms ease" /> */}
                </Link>
              )}
            </div>
            <nav className="mt-6 md:mt-3 grow mb-5 sidebar__menu ">
              <div
                className={` flex-wrap ${toggleCollapse ? 'px-3' : 'px-8'} `}
              >
                <div className="">
                  <Link
                    href="/creator"
                    className={`menu-item w-full font-thin ${
                      router.asPath === '/creator'
                        ? 'bg-[#F3F9FF] text-[#046ED1]'
                        : 'text-[#7F8691]'
                    }  flex items-center p-3 px-3  my-2  transition-colors duration-200 ease-in-out hover:bg-[#F3F9FF] hover:text-[#046ED1]  rounded-lg ${
                      toggleCollapse ? 'justify-center' : 'justify-start'
                    }`}
                  >
                    <span className="text-left px-3">
                      <DashboardIcon2 />
                    </span>
                    {!toggleCollapse && (
                      <span className={classNames('text-xs font-normal ')}>
                        Dashboard
                      </span>
                    )}
                  </Link>
                  <Link
                    href="/creator/videos"
                    className={`menu-item w-full font-thin ${
                      router.asPath === '/creator/videos' ||
                      router.pathname.startsWith('/creator/videos')
                        ? 'bg-[#F3F9FF] text-[#046ED1]'
                        : 'text-[#7F8691]'
                    }  flex items-center p-3 px-3  my-2  transition-colors duration-200 ease-in-out hover:bg-[#F3F9FF] hover:text-[#046ED1]  rounded-lg ${
                      toggleCollapse ? 'justify-center' : 'justify-start'
                    }`}
                  >
                    <span className="text-left px-3">
                      <VideoPlayIcon width={20} height={20}/>
                    </span>
                    {!toggleCollapse && (
                      <span className={classNames('text-xs font-normal ')}>
                        Videos
                      </span>
                    )}
                  </Link>
                  <Link
                    href="/creator/payout"
                    className={`menu-item w-full font-thin ${
                      router.asPath === '/creator/payout' ||
                      router.pathname.startsWith('/creator/payout')
                        ? 'bg-[#F3F9FF] text-[#046ED1]'
                        : 'text-[#7F8691]'
                    }  flex items-center p-3 px-3  my-2  transition-colors duration-200 ease-in-out hover:bg-[#F3F9FF] hover:text-[#046ED1]  rounded-lg ${
                      toggleCollapse ? 'justify-center' : 'justify-start'
                    }`}
                  >
                    <span className="text-left px-3">
                      <EmptyWalletIcon />
                    </span>
                    {!toggleCollapse && (
                      <span className={classNames('text-xs font-normal ')}>
                        Payout
                      </span>
                    )}
                  </Link>
                  <Link
                    href="/creator/faqs"
                    className={`menu-item w-full font-thin ${
                      router.asPath === '/creator/faqs' ||
                      router.pathname.startsWith('/creator/faqs')
                        ? 'bg-[#F3F9FF] text-[#046ED1]'
                        : 'text-[#7F8691] '
                    }  flex  items-center p-3 px-3 my-2  hover:bg-[#F3F9FF] hover:text-[#046ED1] transition-colors duration-200 ease-in-out rounded-lg ${
                      toggleCollapse ? 'justify-center' : 'justify-start'
                    }`}
                  >
                    <span className="text-left px-3">
                      <MessageQuestionIcon />
                    </span>

                    <div className="flex items-center justify-between w-full">
                      {!toggleCollapse && (
                        <span className="text-xs font-normal transition duration-200 ease-in-out">
                          FAQs
                        </span>
                      )}
                    </div>
                  </Link>
                  <Link
                    href="/creator/settings"
                    className={`menu-item w-full font-thin ${
                      router.asPath === '/creator/settings' ||
                      router.pathname.startsWith('/creator/settings')
                        ? 'bg-[#F3F9FF] text-[#046ED1]'
                        : 'text-[#7F8691]'
                    }  flex  items-center p-3 px-3 my-2  hover:bg-[#F3F9FF] hover:text-[#046ED1]   transition-colors duration-200 ease-in-out rounded-lg ${
                      toggleCollapse ? 'justify-center' : 'justify-start'
                    }`}
                  >
                    <span className="text-left px-3">
                      <SettingIcon />
                    </span>

                    <div className="flex items-center justify-between w-full">
                      {!toggleCollapse && (
                        <span className="text-xs font-normal transition duration-200 ease-in-out">
                          Settings
                        </span>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
          {/* motion-safe:animate-bounce */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
