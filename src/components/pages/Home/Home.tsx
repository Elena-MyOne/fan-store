import React from 'react';
import Categories from './Categories/Categories';
import Products from './Products/Products';
import SortFaculty from './SortFaculty/SortFaculty';
import Pagination from './Pagination/Pagination';
import { useSelector } from 'react-redux';
import { STATUS } from '../../../models/enums';
import ProductsError from './ProductsError/ProductsError';
import { selectFilter } from '../../../redux/slices/FilterSlice';
import { selectProducts } from '../../../redux/slices/ProductsSlice';
import ProductsEmpty from './ProductsEmpty/ProductsEmpty';
import Search from './Search/Search';
import Sidebar from './Sidebar/Sidebar';

const Home: React.FC = () => {
  const { activeCategory, activeFaculty } = useSelector(selectFilter);
  const { status, products } = useSelector(selectProducts);

  const title =
    activeCategory === 'all' && activeFaculty === 'All' ? 'All products' : 'Sort products';

  return (
    <>
      <Search />
      <div className="home container px-2 m-auto">
        <div className="top flex justify-between items-center gap-6 py-8 xl:flex-row flex-col">
          <Categories />
          <SortFaculty />
        </div>
        <div className="body flex gap-4 md:gap-6 md:mb-6 mb-4">
          <Sidebar />
          <div className="products">
            <h2 className="title font-semibold text-xl md:mb-6 mb-2">{title}</h2>
            {status === STATUS.ERROR ? <ProductsError /> : <Products />}
            {status === STATUS.SUCCESS && products.length === 0 && <ProductsEmpty />}
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
