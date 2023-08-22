import React from 'react';
import EmptyFavorite from './EmptyFavorite/EmptyFavorite';
import FavoriteItems from './FavoriteItems/FavoriteItems';
import { selectFavorite } from '../../../redux/slices/FavoriteSlice';
import { useSelector } from 'react-redux';

const Favorite: React.FC = () => {
  const { isEmptyFavorite } = useSelector(selectFavorite);

  return (
    <section className="favorite container m-auto py-4 md:py-10 h-full px-2">
      <div className="body h-full">{isEmptyFavorite ? <EmptyFavorite /> : <FavoriteItems />}</div>
    </section>
  );
};

export default Favorite;
