import { ProductsData } from './../../models/interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STATUS } from '../../models/enums';
import { fetchFilteredProducts } from '../asyncActions';
import { RootState } from '../store';

export interface ProductsState {
  products: ProductsData[];
  currentPage: number;
  totalProducts: number;
  totalPages: number;
  status: STATUS;
  saleProducts: ProductsData[];
}

const initialState: ProductsState = {
  products: [],
  currentPage: 1,
  totalProducts: 0,
  totalPages: 1,
  status: STATUS.LOADING,
  saleProducts: [],
};

export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
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
    setSaleProducts(state, action: PayloadAction<ProductsData[]>) {
      state.saleProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredProducts.pending, (state) => {
        state.status = STATUS.LOADING;
        state.products = [];
      })
      .addCase(fetchFilteredProducts.fulfilled, (state, action) => {
        state.status = STATUS.SUCCESS;
        state.products = action.payload;
      })
      .addCase(fetchFilteredProducts.rejected, (state) => {
        state.status = STATUS.ERROR;
        state.products = [];
      });
  },
});

export const selectProducts = (state: RootState) => state.products;

export const { setProducts, setCurrentPage, setTotalProducts, setTotalPages, setSaleProducts } =
  ProductsSlice.actions;
export default ProductsSlice.reducer;
