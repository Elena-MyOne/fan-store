import React from 'react';
import { ROUTER_PATH } from '../../../../models/enums';
import { Link } from 'react-router-dom';
import image from '../../../../assets/images/pages/favorite/1.png';

const EmptyFavorite: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full w-full flex-col gap-6 md:gap-12">
      <div className="image w-24">
        <img src={image} alt="image" />
      </div>
      <div className="empty text-lg">Nothing show yet</div>
      <Link
        className="px-8 py-3 block text-white bg-gray-800 hover:bg-orange-500 duration-300 rounded-3xl"
        to={ROUTER_PATH.MAIN + ROUTER_PATH.HOME}
      >
        Shop now
      </Link>
    </div>
  );
};

export default EmptyFavorite;
