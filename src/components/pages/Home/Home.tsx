import React from 'react';
import Categories from './Categories/Categories';
import Products from './Products/Products';
import Sort from './Sort/Sort';
import Pagination from './Pagination/Pagination';

interface DataProps {
  totalPages: number;
}

const Home = ({ totalPages }: DataProps) => {
  return (
    <div className="home container px-2 m-auto">
      <div className="top flex justify-between items-center gap-4 py-8 xl:flex-row flex-col">
        <Categories />
        <Sort />
      </div>
      <div className="products mb-4">
        <Pagination totalPages={totalPages} />
        <h2 className="title font-semibold text-xl md:mb-4 mb-2">All products</h2>
        <Products />
      </div>
    </div>
  );
};

export default Home;
