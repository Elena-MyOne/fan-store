import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import React from "react";
import { setIsLoading, setProducts } from "../redux/slices/ProductsSlice";
import axios from "axios";
import { URL } from '../models/enums';
import { setAllProducts } from "../redux/slices/FilterSlice";
import { setCurrentPage, setTotalPages, setTotalProducts } from "../redux/slices/PaginationSlice";

const { activeCategory, activeFaculty } = useSelector((state: RootState) => state.filter);
const { currentPage, totalProducts } = useSelector((state: RootState) => state.pagination);
const { searchProduct } = useSelector((state: RootState) => state.header);
const dispatch = useDispatch();

React.useEffect(() => {
  dispatch(setIsLoading(true));
  axios.get(`${URL.PRODUCTS}?page=1&limit=${totalProducts}`).then((res) => {
    dispatch(setAllProducts(res.data.products));
    dispatch(setTotalProducts(res.data.totalProducts));
    dispatch(setIsLoading(false));
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
    });
  window.scrollTo(0, 0);
}, [dispatch, activeCategory, activeFaculty, searchProduct, currentPage]);