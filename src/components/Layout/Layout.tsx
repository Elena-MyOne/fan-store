import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

interface LayoutProps {
  searchProduct: string;
  setSearchProduct: (name: string) => void;
}

const Layout = ({ searchProduct, setSearchProduct }: LayoutProps) => {
  return (
    <div className="grid grid-rows-[80px_auto_60px]">
      <Header searchProduct={searchProduct} setSearchProduct={setSearchProduct} />
      <main className="min-h-[87vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
