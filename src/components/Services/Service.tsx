import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import React from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { setFilters } from '../../redux/slices/FilterSlice';
import { setSearchParam } from '../../redux/slices/HeaderSlice';
import { fetchInitialProducts, fetchFilteredProducts } from '../../redux/asyncActions';

const Service = () => {
  const { activeCategory, activeFaculty } = useSelector((state: RootState) => state.filter);
  const { currentPage, totalProducts } = useSelector((state: RootState) => state.products);
  const { searchProduct } = useSelector((state: RootState) => state.header);
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
