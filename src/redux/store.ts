import { configureStore } from '@reduxjs/toolkit';
import FilterSlice from './slices/FilterSlice';
import ProductsSlice from './slices/ProductsSlice';
import HeaderSlice from './slices/HeaderSlice';
import CartSlice from './slices/CartSlice';
import CheckoutSlice from './slices/CheckoutSlice';

export const store = configureStore({
  reducer: {
    filter: FilterSlice,
    products: ProductsSlice,
    header: HeaderSlice,
    cart: CartSlice,
    checkout: CheckoutSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
