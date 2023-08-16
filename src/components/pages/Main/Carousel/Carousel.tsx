import React from 'react';

import Slider from 'react-slick';
import './slick.scss';
import './slick-theme.scss';
import './Carousel.scss';

import { Link } from 'react-router-dom';
import { CATEGORIES, ROUTER_PATH } from '../../../../models/enums';
import { setActiveCategory } from '../../../../redux/slices/FilterSlice';
import { useDispatch } from 'react-redux';
import { slides } from '../../../../data/carousel';

const Carousel: React.FC = () => {
  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <div className="slider px-4 pb-8 container m-auto">
      <div className="body text-white rounded-lg">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div
              className={`item item-${slide.id} flex items-start flex-col gap-4 px-20 py-10 sm:py-32`}
              key={slide.id}
            >
              <div className="content max-w-lg">
                <h2 className="font-fjalla md:text-3xl text-xl">{slide.title}</h2>
                <p className="md:text-xl mt-4 md:mt-8 h-24 sm:block hidden">{slide.text}</p>
                <p className="md:text-xl mt-4 md:mt-8 text-orange-500">-30% sale</p>
                <Link
                  className="text-xl inline-block bg-gray-200 hover:bg-orange-500 px-4 py-2 text-black hover:text-white rounded-3xl mt-8 mb-10 sm:mb-0 duration-300"
                  to={ROUTER_PATH.HOME}
                  onClick={() => dispatch(setActiveCategory(slide.link))}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
