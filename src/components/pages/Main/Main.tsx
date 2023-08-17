import React from 'react';
import Carousel from './Carousel/Carousel';
import MainCategories from './MainCategories/MainCategories';
import Collections from './Collections/Collections';
import BestSellers from './BestSellers/BestSellers';
import Sale from './Sale/Sale';
import BestRating from './BestRating/BestRating';

const Main: React.FC = () => {
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
