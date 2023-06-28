import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_PATH } from '../../../../models/enums';

const LoggedInPopup: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 min-w-[310px]">
      <img className="w-44" src="./assets/images/3.webp" alt="" />
      <div>Welcome, you are now logged in!</div>
      <div className="buttons flex items-center gap-4 text-center">
        <Link
          to={ROUTER_PATH.HOME}
          className="w-44 px-6 py-2 block text-white bg-gray-800 hover:bg-gray-900 duration-300 rounded-3xl"
        >
          Home page
        </Link>
        <Link
          to={`/${ROUTER_PATH.PROFILE}/${ROUTER_PATH.ACCOUNT}`}
          className="w-44 px-6 py-2 block text-white bg-gray-800 hover:bg-gray-900 duration-300 rounded-3xl"
        >
          Account
        </Link>
      </div>
    </div>
  );
};

export default LoggedInPopup;