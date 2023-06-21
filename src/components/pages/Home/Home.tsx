import React from 'react';
import Categories from './Categories/Categories';
import Products from './Products/Products';
import Sort from './Sort/Sort';
import Pagination from './Pagination/Pagination';
import { useSelector } from 'react-redux';
import { STATUS } from '../../../models/enums';
import ProductsError from './ProductsError/ProductsError';
import { selectFilter } from '../../../redux/slices/FilterSlice';
import { selectProducts } from '../../../redux/slices/ProductsSlice';
import ProductsEmpty from './ProductsEmpty/ProductsEmpty';

const Home = () => {
  const { activeCategory, activeFaculty } = useSelector(selectFilter);
  const { status, products } = useSelector(selectProducts);

  const title =
    activeCategory === 'all' && activeFaculty === 'All' ? 'All products' : 'Sort products';

  return (
    <div className="home container px-2 m-auto">
      <div className="top flex justify-between items-center gap-6 py-8 xl:flex-row flex-col">
        <Categories />
        <Sort />
      </div>
      <div className="products mb-4">
        <Pagination />
        <h2 className="title font-semibold text-xl md:mb-4 mb-2">{title}</h2>
        {status === STATUS.ERROR ? <ProductsError /> : <Products />}
        {status === STATUS.SUCCESS && products.length === 0 && <ProductsEmpty />}
      </div>
    </div>
  );
};

export default Home;
