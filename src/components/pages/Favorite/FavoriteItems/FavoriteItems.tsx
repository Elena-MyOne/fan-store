import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorite } from '../../../../redux/slices/FavoriteSlice';
import ProductCard from '../../../ProductCard/ProductCard';

const FavoriteItems = () => {
  const { favoriteItems } = useSelector(selectFavorite);

  return (
    <div className="h-full">
      <h2 className="title font-semibold text-xl md:mb-4 mb-2">Favorite</h2>
      <div className="cards text-center ">
        <div className="items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-6">
          {favoriteItems.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteItems;
