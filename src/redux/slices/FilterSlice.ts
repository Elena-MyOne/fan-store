import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductsData } from '../../models/interface';

export interface FilterState {
  activeCategory: string;
  activeFaculty: string;
  allProducts: ProductsData[];
}

const initialState: FilterState = {
  activeCategory: 'all',
  activeFaculty: 'All',
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
  },
});

export const { setActiveCategory, setActiveFaculty, setAllProducts, setFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
