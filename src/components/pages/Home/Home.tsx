import React from 'react';
import Categories from './Categories/Categories';
import Products from './Products/Products';
import Sort from './Sort/Sort';
import { ProductsData } from '../../../models/interface';
import Pagination from './Pagination/Pagination';

interface DataProps {
  products: ProductsData[];
  allProducts: ProductsData[];
  loading: boolean;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Home = ({
  products,
  loading,
  allProducts,
  currentPage,
  totalPages,
  setCurrentPage,
}: DataProps) => {
  return (
    <div className="home container px-2 m-auto">
      <div className="top flex justify-between items-center gap-4 py-8 xl:flex-row flex-col">
        <Categories allProducts={allProducts} loading={loading} />
        <Sort allProducts={allProducts} />
      </div>
      <div className="products mb-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
        <h2 className="title font-semibold text-xl md:mb-4 mb-2">All products</h2>
        <Products products={products} loading={loading} />
      </div>
    </div>
  );
};

export default Home;
