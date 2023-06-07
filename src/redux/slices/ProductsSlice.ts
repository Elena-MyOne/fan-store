import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { ProductsData } from '../../models/interface';
import axios from 'axios';
import { URL } from '../../models/enums';

export interface ProductsState {
  isLoading: boolean;
  products: ProductsData[];
  currentPage: number;
  totalProducts: number;
  totalPages: number;
}

const initialState: ProductsState = {
  isLoading: true,
  products: [],
  currentPage: 1,
  totalProducts: 0,
  totalPages: 1,
};

export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setProducts(state, action: PayloadAction<ProductsData[]>) {
      state.products = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setTotalProducts(state, action: PayloadAction<number>) {
      state.totalProducts = action.payload;
    },
    setTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
  },
});

export const { setProducts, setIsLoading, setCurrentPage, setTotalProducts, setTotalPages } =
  ProductsSlice.actions;
export default ProductsSlice.reducer;
