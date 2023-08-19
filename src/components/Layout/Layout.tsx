import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Service from '../Services/Service';

const Layout = () => {
  return (
    <div className="grid grid-rows-[auto_auto_80px]">
      <Service />
      <Header />
      <main className="min-h-[83vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
