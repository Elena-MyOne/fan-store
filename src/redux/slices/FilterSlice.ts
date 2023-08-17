import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductsData } from '../../models/interface';
import { RootState } from '../store';
import { ORDER, SORT } from '../../models/enums';

export interface FilterState {
  activeCategory: string;
  activeFaculty: string;
  sort: string;
  order: string;
  sale: string;
  allProducts: ProductsData[];
}

const initialState: FilterState = {
  activeCategory: 'all',
  activeFaculty: 'All',
  sort: '',
  order: '',
  sale: '',
  allProducts: [],
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<string>) {
      state.activeCategory = action.payload;
    },
    setActiveFaculty(state, action: PayloadAction<string>) {
      state.activeFaculty = action.payload;
    },
    setAllProducts(state, action: PayloadAction<ProductsData[]>) {
      state.allProducts = action.payload;
    },
    setFilters(state, action: PayloadAction<{ activeCategory: string; activeFaculty: string }>) {
      state.activeCategory = action.payload.activeCategory;
      state.activeFaculty = action.payload.activeFaculty;
    },
    setSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setOrder(state, action: PayloadAction<string>) {
      state.order = action.payload;
    },
    setSale(state, action: PayloadAction<string>) {
      state.sale = action.payload;
    },
    setSaleForMainPage(state) {
      state.sort = SORT.SALE;
      state.sale = 'true';
      state.order = ORDER.DESC;
    },
    setRatingForMainPage(state) {
      state.sort = SORT.RATE;
      state.sale = '';
      state.order = ORDER.DESC;
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;

export const {
  setActiveCategory,
  setActiveFaculty,
  setAllProducts,
  setFilters,
  setSort,
  setOrder,
  setSale,
  setSaleForMainPage,
  setRatingForMainPage,
} = filterSlice.actions;
export default filterSlice.reducer;
