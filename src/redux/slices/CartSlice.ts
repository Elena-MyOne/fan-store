import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { CartData, ProductsData } from '../../models/interface';

export interface CartState {
  totalPrice: number;
  totalSale: number;
  items: CartData[];
}

const initialState: CartState = {
  totalPrice: 0,
  totalSale: 0,
  items: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItemToCart(state, action: PayloadAction<ProductsData>) {
    //   state.items.push(action.payload);
    //   state.totalPrice =
    //     Math.round(
    //       state.items.reduce(
    //         (acc, currentValue) => acc + (currentValue.price * (100 - currentValue.sale)) / 100,
    //         initialState.totalPrice
    //       ) * 100
    //     ) / 100;
    // },
    addItemToCart(state, action: PayloadAction<ProductsData>) {
      const findItem = state.items.find((item) => item.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice =
        Math.round(
          state.items.reduce(
            (acc, currentValue) => acc + (currentValue.price * (100 - currentValue.sale)) / 100,
            initialState.totalPrice
          ) * 100
        ) / 100;

      state.totalSale =
        Math.round(
          state.items.reduce(
            (acc, currentValue) => acc + (currentValue.price * currentValue.sale) / 100,
            initialState.totalSale
          ) * 100
        ) / 100;
    },
    removeItemFromCart(state, action: PayloadAction<ProductsData>) {
      state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
