import React from 'react';
import EmptyFavorite from './EmptyFavorite/EmptyFavorite';
import FavoriteItems from './FavoriteItems/FavoriteItems';

const Favorite: React.FC = () => {
  const [isFavoriteItems, setisFavoriteItems] = React.useState(false);

  return (
    <section className="favorite container m-auto py-4 md:py-10 h-full px-2">
      <div className="body h-full">{isFavoriteItems ? <FavoriteItems /> : <EmptyFavorite />}</div>
    </section>
  );
};

export default Favorite;
