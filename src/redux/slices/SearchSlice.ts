import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface SearchState {
  searchProduct: string;
}

const initialState: SearchState = {
  searchProduct: '',
};

export const SearchSlice = createSlice({
  name: 'search',
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

export const selectSearch = (state: RootState): SearchState => state.search;

export const { setSearchProduct, setSearchParam } = SearchSlice.actions;
export default SearchSlice.reducer;
