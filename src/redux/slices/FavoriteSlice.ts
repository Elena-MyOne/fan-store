import { RootState } from './../store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductsData } from '../../models/interface';
import { getFavoriteFromLocalStorage } from '../../utils/getFavoriteFromLocalStorage';

export interface FavoriteState {
  isEmptyFavorite: boolean;
  favoriteItems: ProductsData[];
  favoriteItemsCount: number;
}

const { isEmptyFavorite, favoriteItems, favoriteItemsCount } = getFavoriteFromLocalStorage();

const initialState: FavoriteState = {
  isEmptyFavorite,
  favoriteItems,
  favoriteItemsCount,
};

const FavoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setIsEmptyFavorite(state, action: PayloadAction<boolean>) {
      state.isEmptyFavorite = action.payload;
    },
    setFavoriteItemsCount(state) {
      state.favoriteItemsCount = state.favoriteItems.length;
    },
    addFavoriteItemToFavorite(state, action: PayloadAction<ProductsData>) {
      const findItem = state.favoriteItems.find((item) => item.id === action.payload.id);

      if (findItem) {
        return;
      } else {
        state.favoriteItems.push({ ...action.payload });
      }

      state.favoriteItemsCount = state.favoriteItems.length;
    },
    removeFavoriteItemFromFavorite(state, action: PayloadAction<number>) {
      state.favoriteItems = state.favoriteItems.filter((obj) => obj.id !== action.payload);

      if (state.favoriteItems.length === 0) {
        state.isEmptyFavorite = true;
      }

      state.favoriteItemsCount = state.favoriteItems.length;
    },
  },
});

export const selectFavorite = (state: RootState) => state.favorite;

export const {
  setIsEmptyFavorite,
  setFavoriteItemsCount,
  addFavoriteItemToFavorite,
  removeFavoriteItemFromFavorite,
} = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
