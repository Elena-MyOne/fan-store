import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import React from 'react';
import { setIsLoading, setProducts } from '../../redux/slices/ProductsSlice';
import axios from 'axios';
import { URL } from '../../models/enums';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { setAllProducts, setFilters } from '../../redux/slices/FilterSlice';
import {
  setCurrentPage,
  setTotalPages,
  setTotalProducts,
} from '../../redux/slices/PaginationSlice';
import { setSearchParam } from '../../redux/slices/HeaderSlice';

const Service = () => {
  const { activeCategory, activeFaculty } = useSelector((state: RootState) => state.filter);
  const { currentPage, totalProducts } = useSelector((state: RootState) => state.pagination);
  const { searchProduct } = useSelector((state: RootState) => state.header);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    dispatch(setIsLoading(true));
    axios
      .get(`${URL.PRODUCTS}?page=1&limit=${totalProducts}`)
      .then((res) => {
        dispatch(setAllProducts(res.data.products));
        dispatch(setTotalProducts(res.data.totalProducts));
        dispatch(setIsLoading(false));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, totalProducts]);

  React.useEffect(() => {
    axios
      .get(
        `${URL.PRODUCTS}?page=${currentPage}&limit=8&category=${activeCategory}&faculty=${activeFaculty}&name=${searchProduct}`
      )
      .then((res) => {
        dispatch(setProducts(res.data.products));
        dispatch(setCurrentPage(res.data.currentPage));
        dispatch(setTotalPages(res.data.totalPages));
      })
      .catch((error) => {
        console.log(error);
      });
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
