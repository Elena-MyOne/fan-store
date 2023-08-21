import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL } from '../models/enums';
import { RootState } from './store';
import {
  setAllProducts,
  setRatingDesc,
  setRatingSortOrderDefault,
  setSaleDesc,
} from './slices/FilterSlice';
import {
  setBestRatingProducts,
  setCurrentPage,
  setProducts,
  setSaleProducts,
  setTotalPages,
  setTotalProducts,
} from './slices/ProductsSlice';
import {
  clearSignUpFormInputs,
  reset,
  setChangeUserDataErrorMessage,
  setCurrentPasswordError,
  setCurrentPasswordSuccess,
  setEmail,
  setIsRegisterError,
  setName,
  setRegisterErrorMessage,
  setSignUp,
  setUserId,
  setUserLogInError,
} from './slices/UserSlice';
import { getUserFromLocalStorage } from '../utils/getUserFromLoocalStorage';
import { PRODUCTS_PER_PAGE } from '../models/globalVariables';

const requestConfig = {
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
};

const { name: storedName, email: storedEmail } = getUserFromLocalStorage();

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

export const getSaleProducts = createAsyncThunk(
  'products/getSaleProducts',
  async (_, { dispatch, getState }) => {
    dispatch(setSaleDesc());

    try {
      const state: RootState = getState() as RootState;
      const { sale, sort, order } = state.filter;

      const response = await axios.get(
        `${URL.PRODUCTS}?page=1&limit=50&sale=${sale}&sort=${sort}&order=${order}`
      );

      dispatch(setSaleProducts(response.data.products));
    } catch (error) {
      console.log(error);
    }
  }
);

export const getRatingProducts = createAsyncThunk(
  'products/getRatingProducts',
  async (_, { dispatch, getState }) => {
    dispatch(setRatingDesc());
    try {
      const state: RootState = getState() as RootState;
      const { sort, order } = state.filter;

      const response = await axios.get(
        `${URL.PRODUCTS}?page=1&limit=50&sort=${sort}&order=${order}`
      );

      dispatch(setBestRatingProducts(response.data.products));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setRatingSortOrderDefault());
    }
  }
);

//!sale:
//https://fan-store-backend-elena-myone.onrender.com/products?page=1&limit=50&sale=true&sort=sale&order=desc

//TODO price:
//https://fan-store-backend-elena-myone.onrender.com/products?page=1&limit=50&sort=price&order=desc

//TODO rate:
//https://fan-store-backend-elena-myone.onrender.com/products?page=1&limit=50&sort=rate&order=asc
//starts sort
//https://fan-store-backend-elena-myone.onrender.com/products?page=1&limit=50&sort=rate&order=4&category=souvenirs

//All together
//https://fan-store-backend-elena-myone.onrender.com/products?page=1&limit=50&sort=rate&order=asc&category=souvenirs&faculty=Hufflepuff

export const fetchFilteredProducts = createAsyncThunk(
  'products/fetchFilteredProducts',
  async (_, { dispatch, getState }) => {
    const state: RootState = getState() as RootState;
    const { activeCategory, activeFaculty, sort, order, sale } = state.filter;
    const searchProduct = state.search.searchProduct;
    const currentPage = state.products.currentPage;

    const response = await axios.get(
      `${URL.PRODUCTS}?page=${currentPage}&limit=${PRODUCTS_PER_PAGE}&category=${activeCategory}&faculty=${activeFaculty}&name=${searchProduct}&sort=${sort}&order=${order}&sale=${sale}`
    );

    response.data.products <= PRODUCTS_PER_PAGE
      ? dispatch(setCurrentPage(1))
      : dispatch(setCurrentPage(response.data.currentPage));

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

      const response = await axios.post(
        URL.USERS,
        JSON.stringify({ name, email, password }),
        requestConfig
      );
      console.log(response.data);
      const data = response.data;

      const id = data.id || 0;
      dispatch(setSignUp(true));
      dispatch(setIsRegisterError(false));
      localStorage.setItem(
        'useInfo',
        JSON.stringify({ name: data.name, email: data.email, isSignUp: true, id: id })
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
        const response = await axios.get(`${URL.USERS_LOGIN}/${userLogInInfo}/${password}`);
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

export const validateCurrentPassword = createAsyncThunk(
  'users/validateCurrentPassword',

  async (_, { dispatch, getState }) => {
    const state: RootState = getState() as RootState;
    const { currentPassword, email } = state.user;

    try {
      const response = await axios.get(`${URL.USERS}/${email}/${currentPassword}`);
      const data = response.data;
      if (data === 'Password does not match') {
        dispatch(setCurrentPasswordError(true));
        dispatch(setCurrentPasswordSuccess(false));
      } else if (data === 'Password matches') {
        dispatch(setCurrentPasswordError(false));
        dispatch(setCurrentPasswordSuccess(true));
      } else {
        dispatch(setCurrentPasswordError(false));
        dispatch(setCurrentPasswordSuccess(false));
      }
    } catch (error) {
      console.log(error);
      dispatch(setChangeUserDataErrorMessage((error as Error).message));
    }
  }
);

export const changePassword = createAsyncThunk(
  'users/changePassword',
  async (_, { dispatch, getState }) => {
    const state: RootState = getState() as RootState;
    const { password } = state.user;

    try {
      await axios.patch(`${URL.USERS}/${storedEmail}`, JSON.stringify({ password }), requestConfig);
    } catch (error) {
      console.log(error);
      dispatch(setChangeUserDataErrorMessage((error as Error).message));
    }
  }
);

export const changeUserName = createAsyncThunk(
  'users/changeUserName',
  async (_, { dispatch, getState }) => {
    const state: RootState = getState() as RootState;
    const { name } = state.user;

    if (name === storedName) {
      dispatch(
        setChangeUserDataErrorMessage(
          'Invalid Entry, new User Name should be different from the old one'
        )
      );
      return;
    }

    try {
      const response = await axios.patch(
        `${URL.USERS}/${storedEmail}`,
        JSON.stringify({ name }),
        requestConfig
      );
      const data = response.data;
      if (response.status === 200) {
        localStorage.setItem(
          'useInfo',
          JSON.stringify({ name: data.name, email: data.email, isSignUp: true, id: data.id })
        );
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(setChangeUserDataErrorMessage((error as Error).message));
    }
  }
);

export const changeUserEmail = createAsyncThunk(
  'users/changeUserEmail',
  async (_, { dispatch, getState }) => {
    const state: RootState = getState() as RootState;
    const { email } = state.user;

    if (email === storedEmail) {
      dispatch(
        setChangeUserDataErrorMessage(
          'Invalid Entry, new User Email should be different from the old one'
        )
      );
      return;
    }

    try {
      const response = await axios.patch(
        `${URL.USERS}/${storedEmail}`,
        JSON.stringify({ email }),
        requestConfig
      );
      const data = response.data;
      if (response.status === 200) {
        localStorage.setItem(
          'useInfo',
          JSON.stringify({ name: data.name, email: data.email, isSignUp: true, id: data.id })
        );
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(setChangeUserDataErrorMessage((error as Error).message));
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
