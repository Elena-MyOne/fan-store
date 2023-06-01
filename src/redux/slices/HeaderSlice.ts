import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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

export const { setSearchProduct, setSearchParam } = headerSlice.actions;
export default headerSlice.reducer;
