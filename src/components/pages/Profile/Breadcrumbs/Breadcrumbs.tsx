import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER_PATH } from '../../../../models/enums';

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs flex gap-2 mt-4 mb-8">
      <Link
        to={ROUTER_PATH.HOME}
        className="font-semibold hover:text-orange-400 duration-300 cursor-pointer"
      >
        Home
      </Link>
      <span>/</span>
      <span className="text-gray-500">Profile</span>
    </div>
  );
};

export default Breadcrumbs;
