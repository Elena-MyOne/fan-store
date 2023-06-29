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
import {
  clearSignUpFormInputs,
  reset,
  setEmail,
  setIsRegisterError,
  setName,
  setRegisterErrorMessage,
  setSignUp,
  setUserId,
  setUserLogInError,
} from './slices/UserSlice';

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
      const data = response.data;

      const id = data.id || 0;
      dispatch(setSignUp(true));
      dispatch(setIsRegisterError(false));
      localStorage.setItem(
        'useInfo',
        JSON.stringify({ name: data.name, email: data.email, isSignUp: true, id: data.id })
      );
    } catch (error) {
      dispatch(setSignUp(false));
      dispatch(setIsRegisterError(true));
      if (axios.isAxiosError(error) && error.response && error.response.status === 409) {
        dispatch(setRegisterErrorMessage('User already exists'));
      } else {
        dispatch(setRegisterErrorMessage((error as Error).message));
      }
      dispatch(clearSignUpFormInputs());
    }
  }
);

export const validateLogInUser = createAsyncThunk(
  'users/logInUser',
  async (_, { dispatch, getState }) => {
    const state: RootState = getState() as RootState;
    const { userLogInInfo, password } = state.user;

    try {
      if (userLogInInfo && password) {
        const response = await axios.get(`${URL.USERS}/${userLogInInfo}/${password}`);
        const data = response.data;
        console.log(response.data);
        dispatch(setUserLogInError(false));
        dispatch(setName(data.name));
        dispatch(setEmail(data.email));
        dispatch(setUserId(data.id));
        dispatch(setSignUp(true));
        localStorage.setItem(
          'useInfo',
          JSON.stringify({ name: data.name, email: data.email, isSignUp: true, id: data.id })
        );
      }
    } catch (error) {
      console.log(error);
      dispatch(setUserLogInError(true));
    } finally {
      if (userLogInInfo === '' || password === '') {
        dispatch(setUserLogInError(true));
      }
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',

  async (_, { dispatch, getState }) => {
    const state: RootState = getState() as RootState;
    const { id } = state.user;

    try {
      const response = await axios.delete(`${URL.USERS}/${id}`);
      localStorage.removeItem('useInfo');
      localStorage.removeItem('cart');
      dispatch(reset());
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
);
