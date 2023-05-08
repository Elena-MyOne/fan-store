import React from 'react';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header className="header py-4 border-solid border-2 border-indigo-100 flex justify-between">
      <div className="headerLogo container m-auto">
        <img className={style.headerLogoImage} src="/assets/images/logo/logo.png" alt="logo" />
      </div>
      <div className="headerCart"></div>
    </header>
  );
};

export default Header;
