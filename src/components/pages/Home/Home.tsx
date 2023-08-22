import React from 'react';
import Categories from './Categories/Categories';
import Products from './Products/Products';
import SortFaculty from './SortFaculty/SortFaculty';
import Pagination from './Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS } from '../../../models/enums';
import ProductsError from './ProductsError/ProductsError';
import { selectFilter, setFilters } from '../../../redux/slices/FilterSlice';
import { selectProducts } from '../../../redux/slices/ProductsSlice';
import ProductsEmpty from './ProductsEmpty/ProductsEmpty';
import Search from './Search/Search';
import Sidebar from './Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import { selectSearch, setSearchParam } from '../../../redux/slices/SearchSlice';
import qs from 'qs';
import { AppDispatch } from '../../../redux/store';

const Home: React.FC = () => {
  const { activeCategory, activeFaculty, sort, order, sale, selectedSidebarItem } =
    useSelector(selectFilter);
  const { status, products, currentPage } = useSelector(selectProducts);
  const { searchProduct } = useSelector(selectSearch);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (window.location.search) {
      const param = qs.parse(window.location.search.substring(1));
      console.log(param);

      dispatch(
        setFilters({
          activeCategory: param.category as string,
          activeFaculty: param.faculty as string,
          sort: param.sort as string,
          order: param.order as string,
          sale: param.sale as string,
          selectedSidebarItem: param.selected as string,
        })
      );

      dispatch(
        setSearchParam({
          searchProduct: param.search as string,
        })
      );

      // dispatch(setCurrentPage(parseInt(param.page as string, 10)));
    }
  }, [dispatch]);

  React.useEffect(() => {
    // const pathname = window.location.pathname;
    const pathname = window.location.hash;

    if (isMounted.current && pathname.startsWith('#/home')) {
      const queryString = qs.stringify({
        category: activeCategory,
        faculty: activeFaculty,
        search: searchProduct,
        page: currentPage,
        order: order,
        sort: sort,
        sale: sale,
        selected: selectedSidebarItem,
      });
      console.log(queryString);
      navigate(`?${queryString}`);
    }

    if (!pathname.startsWith('#/home')) {
      isMounted.current = false;
    }

    isMounted.current = true;
  }, [
    activeCategory,
    activeFaculty,
    searchProduct,
    order,
    sort,
    sale,
    currentPage,
    navigate,
    selectedSidebarItem,
  ]);

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
          <div className="products grow">
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
