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
import { setSignUp } from './slices/UserSlice';

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

export const registerNewUser = createAsyncThunk(
  'users/registerNewUser',
  async (_, { dispatch, getState }) => {
    try {
      const state: RootState = getState() as RootState;
      const { name, email, password } = state.user;

      const response = await axios.post(URL.USERS, JSON.stringify({ name, email, password }), {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      console.log(response.data);
      dispatch(setSignUp(true));
    } catch (error) {
      console.log(error);
      dispatch(setSignUp(false));
    }
  }
);

// export const fetchUserById
