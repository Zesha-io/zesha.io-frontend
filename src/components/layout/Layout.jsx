'use client';

import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <div className='bg-[#FFFFFF]'>
        <Header />

            {children}

        <Footer />
      </div>
    </>
  );
};

export default Layout;
