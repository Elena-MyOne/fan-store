import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  activeCategory: string;
  activeFaculty: string;
}

const initialState: FilterState = {
  activeCategory: 'all',
  activeFaculty: 'All',
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<string>) {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = filterSlice.actions;
export default filterSlice.reducer;
