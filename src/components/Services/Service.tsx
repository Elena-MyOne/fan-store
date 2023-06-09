import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import React from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { selectFilter, setFilters } from '../../redux/slices/FilterSlice';
import { selectHeader, setSearchParam } from '../../redux/slices/HeaderSlice';
import { fetchInitialProducts, fetchFilteredProducts } from '../../redux/asyncActions';
import { selectProducts } from '../../redux/slices/ProductsSlice';

const Service = () => {
  const { activeCategory, activeFaculty } = useSelector(selectFilter);
  const { currentPage, totalProducts } = useSelector(selectProducts);
  const { searchProduct } = useSelector(selectHeader);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    dispatch(fetchInitialProducts());
  }, [dispatch, totalProducts]);

  React.useEffect(() => {
    dispatch(fetchFilteredProducts());
    window.scrollTo(0, 0);
  }, [dispatch, activeCategory, activeFaculty, searchProduct, currentPage]);

  React.useEffect(() => {
    if (window.location.search) {
      const param = qs.parse(window.location.search.substring(1));

      dispatch(
        setFilters({
          activeCategory: param.category as string,
          activeFaculty: param.faculty as string,
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
    const pathname = window.location.pathname;

    if (isMounted.current && pathname === '/') {
      const queryString = qs.stringify({
        category: activeCategory,
        faculty: activeFaculty,
        search: searchProduct,
        page: currentPage,
      });
      navigate(`?${queryString}`);
    }

    if (pathname !== '/') {
      isMounted.current = false;
    }

    isMounted.current = true;
  }, [activeCategory, activeFaculty, searchProduct, currentPage, navigate]);

  return <></>;
};

export default Service;
