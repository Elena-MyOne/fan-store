import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductsData } from '../../models/interface';
import { RootState } from '../store';
import { CATEGORIES, FACULTY, SALE, SORT, ORDER } from '../../models/enums';

export interface FilterState {
  activeCategory: string;
  activeFaculty: string;
  sort: string;
  order: string;
  sale: string;
  selectedSidebarItem: string | null;
  allProducts: ProductsData[];
}

const initialState: FilterState = {
  activeCategory: CATEGORIES.ALL,
  activeFaculty: FACULTY.ALL,
  sort: SORT.DEFAULT,
  order: ORDER.DEFAULT,
  sale: SALE.DEFAULT,
  selectedSidebarItem: null,
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
    setFilters(
      state,
      action: PayloadAction<{
        activeCategory: string;
        activeFaculty: string;
        sort: string;
        order: string;
        sale: string;
        selectedSidebarItem: string;
      }>
    ) {
      state.activeCategory = action.payload.activeCategory;
      state.activeFaculty = action.payload.activeFaculty;
      state.sort = action.payload.sort;
      state.order = action.payload.order;
      state.sale = action.payload.sale;
      state.selectedSidebarItem = action.payload.selectedSidebarItem;
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
    setSaleDesc(state) {
      state.sort = SORT.SALE;
      state.sale = SALE.TRUE;
      state.order = ORDER.DESC;
    },
    setRatingDesc(state) {
      state.sort = SORT.RATE;
      state.sale = SALE.DEFAULT;
      state.order = ORDER.DESC;
    },
    setRatingSortOrderDefault(state) {
      state.sort = SORT.DEFAULT;
      state.sale = SALE.DEFAULT;
      state.order = ORDER.DEFAULT;
    },
    setSelectedSidebarItem(state, action: PayloadAction<string | null>) {
      state.selectedSidebarItem = action.payload;
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
  setSaleDesc,
  setRatingDesc,
  setSelectedSidebarItem,
  setRatingSortOrderDefault,
} = filterSlice.actions;
export default filterSlice.reducer;
