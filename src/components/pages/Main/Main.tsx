import React from 'react';
import Slider from './Slider/Slider';
import MainCategories from './MainCategories/MainCategories';

const Main: React.FC = () => {
  return (
    <section className="bg-gray-100 h-full">
      <MainCategories />
      <Slider />
      <div className="body container m-auto">
        <div className="why">Why choose us</div>
        <div className="popular">Most popular</div>
        <div className="sale">Sales -20%</div>
        <div className="sale">Image???</div>
      </div>
    </section>
  );
};

export default Main;
