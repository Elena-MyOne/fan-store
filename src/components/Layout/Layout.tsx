import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <div className="grid grid-rows-[90px_auto_50px]">
      <Header />
      <main className="min-h-[86vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
