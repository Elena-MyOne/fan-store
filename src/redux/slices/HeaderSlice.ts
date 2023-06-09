import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface HeaderState {
  searchProduct: string;
}

const initialState: HeaderState = {
  searchProduct: '',
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setSearchProduct(state, action: PayloadAction<string>) {
      state.searchProduct = action.payload;
    },
    setSearchParam(state, action: PayloadAction<{ searchProduct: string }>) {
      state.searchProduct = action.payload.searchProduct;
    },
  },
});

export const selectHeader = (state: RootState): HeaderState => state.header;

export const { setSearchProduct, setSearchParam } = headerSlice.actions;
export default headerSlice.reducer;
