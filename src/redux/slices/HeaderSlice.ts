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
  },
});

export const { setSearchProduct } = headerSlice.actions;
export default headerSlice.reducer;
