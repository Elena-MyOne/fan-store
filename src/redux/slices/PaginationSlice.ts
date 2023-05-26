import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export interface PaginationState {
  currentPage: number;
  totalProducts: number;
  totalPages: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  totalProducts: 0,
  totalPages: 1,
};

export const PaginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
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

export const { setCurrentPage, setTotalProducts, setTotalPages } = PaginationSlice.actions;
export default PaginationSlice.reducer;
