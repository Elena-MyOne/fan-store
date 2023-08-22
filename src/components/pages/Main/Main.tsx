import React from 'react';
import Carousel from './Carousel/Carousel';
import MainCategories from './MainCategories/MainCategories';
import Collections from './Collections/Collections';
import BestSellers from './BestSellers/BestSellers';
import Sale from './Sale/Sale';
import BestRating from './BestRating/BestRating';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { getRatingProducts, getSaleProducts } from '../../../redux/asyncActions';
import { selectProducts } from '../../../redux/slices/ProductsSlice';

const Main: React.FC = () => {
  const { totalProducts } = useSelector(selectProducts);

  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(getSaleProducts());
    dispatch(getRatingProducts());
  }, [dispatch, totalProducts]);

  return (
    <section className=" h-full">
      <MainCategories />
      <div className="body">
        <Carousel />
        <Collections />
        <Sale />
        <BestRating />
        <BestSellers />
      </div>
    </section>
  );
};

export default Main;
