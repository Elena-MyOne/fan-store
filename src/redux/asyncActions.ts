import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../models/enums';
import { RootState } from './store';
import { setAllProducts } from './slices/FilterSlice';
import {
  setCurrentPage,
  setProducts,
  setTotalPages,
  setTotalProducts,
} from './slices/ProductsSlice';

export const fetchInitialProducts = createAsyncThunk(
  'products/fetchInitialProducts',
  async (_, { dispatch, getState }) => {
    try {
      const state: RootState = getState() as RootState;
      const totalProducts = state.products.totalProducts;

      const response = await axios.get(`${URL.PRODUCTS}?page=1&limit=${totalProducts}`);
      dispatch(setAllProducts(response.data.products));
      dispatch(setTotalProducts(response.data.totalProducts));
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchFilteredProducts = createAsyncThunk(
  'products/fetchFilteredProducts',
  async (_, { dispatch, getState }) => {
    const state: RootState = getState() as RootState;
    const { activeCategory, activeFaculty } = state.filter;
    const searchProduct = state.header.searchProduct;
    const currentPage = state.products.currentPage;

    const response = await axios.get(
      `${URL.PRODUCTS}?page=${currentPage}&limit=8&category=${activeCategory}&faculty=${activeFaculty}&name=${searchProduct}`
    );
    dispatch(setCurrentPage(response.data.currentPage));
    dispatch(setTotalPages(response.data.totalPages));
    dispatch(setProducts(response.data.products));

    return response.data.products;
  }
);