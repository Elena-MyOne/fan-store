import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import React from 'react';
import { selectFilter } from '../../redux/slices/FilterSlice';
import { selectSearch } from '../../redux/slices/SearchSlice';
import { fetchInitialProducts, fetchFilteredProducts } from '../../redux/asyncActions';
import { selectProducts } from '../../redux/slices/ProductsSlice';

const Service = () => {
  const { activeCategory, activeFaculty, sort, order, sale } = useSelector(selectFilter);
  const { currentPage, totalProducts } = useSelector(selectProducts);
  const { searchProduct } = useSelector(selectSearch);
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchInitialProducts());
  }, [dispatch, totalProducts]);

  React.useEffect(() => {
    dispatch(fetchFilteredProducts());
    window.scrollTo(0, 0);
  }, [dispatch, activeCategory, activeFaculty, searchProduct, currentPage, sort, order, sale]);

  return <></>;
};

export default Service;
