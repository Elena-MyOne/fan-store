import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { CartData, ProductsData } from '../../models/interface';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { calcTotalSale } from '../../utils/calcTotalSale';
import { calcItemsCount } from '../../utils/calcItemsCount';
import { RootState } from '../store';
import { getCartFromLocalStorage } from '../../utils/getCartFromLocalStorage';

export interface CartState {
  isEmptyCart: boolean;
  totalPrice: number;
  totalSale: number;
  items: CartData[];
  itemsCount: number;
}

const { isEmptyCart, totalPrice, totalSale, items, itemsCount } = getCartFromLocalStorage();

const initialState: CartState = {
  isEmptyCart,
  totalPrice,
  totalSale,
  items,
  itemsCount,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setEmptyCart(state, action: PayloadAction<boolean>) {
      state.isEmptyCart = action.payload;
    },

    addItemToCart(state, action: PayloadAction<ProductsData>) {
      const findItem = state.items.find((item) => item.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = calcTotalPrice(state.items);
      state.totalSale = calcTotalSale(state.items);
      state.itemsCount = calcItemsCount(state.items);
    },

    minusItemFromCart(state, action: PayloadAction<number>) {
      const itemId = action.payload;
      const findItem = state.items.find((item) => item.id === itemId);

      if (findItem) {
        if (findItem.count > 1) {
          findItem.count--;
        } else {
          state.items = state.items.filter((obj) => obj.id !== action.payload);
          if (state.items.length === 0) {
            state.isEmptyCart = true;
          }
        }

        state.totalPrice = calcTotalPrice(state.items);
        state.totalSale = calcTotalSale(state.items);
        state.itemsCount = calcItemsCount(state.items);
      }
    },

    removeItemFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
      state.totalSale = calcTotalSale(state.items);
      state.itemsCount = calcItemsCount(state.items);

      if (state.items.length === 0) {
        state.isEmptyCart = true;
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalSale = 0;
      state.isEmptyCart = true;
      state.itemsCount = 0;
    },

    setItemsCount(state) {
      state.itemsCount = calcItemsCount(state.items);
    },
  },
});

export const selectCart = (state: RootState) => state.cart;

export const {
  addItemToCart,
  minusItemFromCart,
  removeItemFromCart,
  clearCart,
  setEmptyCart,
  setItemsCount,
} = CartSlice.actions;
export default CartSlice.reducer;
