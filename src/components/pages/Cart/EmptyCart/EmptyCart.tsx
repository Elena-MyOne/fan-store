import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER_PATH } from '../../../../models/enums';

const EmptyCart = () => {
  return (
    <>
      <h1 className="title font-bold text-xl">Cart is empty</h1>
      <p className="text-gray-800">You haven&apos;t ordered anything yet</p>
      <div className="w-56">
        <img src="/assets/images/pages/cart/1.png" alt="walking woman with empty cart" />
      </div>
      <NavLink
        to={ROUTER_PATH.HOME}
        className="px-6 py-2 block text-white bg-gray-800 hover:bg-gray-900 duration-300 rounded-3xl"
      >
        Home page
      </NavLink>
    </>
  );
};

export default EmptyCart;
