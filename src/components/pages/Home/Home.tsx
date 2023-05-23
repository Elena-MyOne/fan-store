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
  activeCategory: string;
  onClickCategory: (category: string) => void;
  activeFaculty: string;
  onClickFaculty: (faculty: string) => void;
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Home = ({
  products,
  loading,
  activeCategory,
  onClickCategory,
  activeFaculty,
  onClickFaculty,
  allProducts,
  currentPage,
  totalPages,
  setCurrentPage,
}: DataProps) => {
  return (
    <div className="home container px-2 m-auto">
      <div className="top flex justify-between items-center gap-4 py-8 xl:flex-row flex-col">
        <Categories
          allProducts={allProducts}
          loading={loading}
          activeCategory={activeCategory}
          handleCategory={(category: string) => onClickCategory(category)}
        />
        <Sort
          allProducts={allProducts}
          handleFaculty={(faculty: string) => onClickFaculty(faculty)}
          activeFaculty={activeFaculty}
        />
      </div>
      <div className="products mb-4">
        <h2 className="title font-semibold text-xl md:mb-4 mb-2">All products</h2>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
        <Products products={products} loading={loading} />
      </div>
    </div>
  );
};

export default Home;
