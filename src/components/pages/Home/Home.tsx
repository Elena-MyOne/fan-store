import React from 'react';
import Categories from './Categories/Categories';
import Products from './Products/Products';
import Sort from './Sort/Sort';
import Pagination from './Pagination/Pagination';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const Home = () => {
  const { activeCategory, activeFaculty } = useSelector((state: RootState) => state.filter);

  const title =
    activeCategory === 'all' && activeFaculty === 'All' ? 'All products' : 'Sort products';

  // const title = setTitle();

  return (
    <div className="home container px-2 m-auto">
      <div className="top flex justify-between items-center gap-4 py-8 xl:flex-row flex-col">
        <Categories />
        <Sort />
      </div>
      <div className="products mb-4">
        <Pagination />
        <h2 className="title font-semibold text-xl md:mb-4 mb-2">{title}</h2>
        <Products />
      </div>
    </div>
  );
};

export default Home;
