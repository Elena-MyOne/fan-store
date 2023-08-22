import React from 'react';

const FavoriteItems = () => {
  return (
    <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-6 h-full">
      <h2 className="title font-semibold text-xl md:mb-4 mb-2">Favorite</h2>
      <div className="">Items</div>
    </div>
  );
};

export default FavoriteItems;
