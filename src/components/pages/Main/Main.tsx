import React from 'react';
import Carousel from './Slider/Carousel';
import MainCategories from './MainCategories/MainCategories';
import Collections from './Collections/Collections';

const Main: React.FC = () => {
  return (
    <section className="bg-gray-100 h-full">
      <MainCategories />
      <div className="body container m-auto">
        <Carousel />
        <Collections />
        <div className="popular">Most popular</div>
        <div className="sale">Sales -20%</div>
        <div className="sale">Image???</div>
      </div>
    </section>
  );
};

export default Main;
