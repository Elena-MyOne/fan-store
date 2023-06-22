import { configureStore } from '@reduxjs/toolkit';
import FilterSlice from './slices/FilterSlice';
import ProductsSlice from './slices/ProductsSlice';
import HeaderSlice from './slices/HeaderSlice';
import CartSlice from './slices/CartSlice';
import CheckoutSlice from './slices/CheckoutSlice';
import UserSlice from './slices/UserSlice';

export const store = configureStore({
  reducer: {
    filter: FilterSlice,
    products: ProductsSlice,
    header: HeaderSlice,
    cart: CartSlice,
    checkout: CheckoutSlice,
    user: UserSlice,
  },
});

export const selectUser = (state: RootState) => state.user;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
