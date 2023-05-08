import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER_PATH } from '../../../models/enums';

const NotFound = () => {
  return (
    <section className="error h-full flex justify-center items-center flex-col gap-5 mx-2">
      <h2 className="title text-4xl">404</h2>
      <p className="text-gray-600">Something goes wrong. Page Not Found</p>
      <NavLink
        to={ROUTER_PATH.HOME}
        className="px-6 py-2 block text-white bg-gray-800 hover:bg-gray-900 duration-300 rounded-3xl"
      >
        Home page
      </NavLink>
    </section>
  );
};

export default NotFound;
