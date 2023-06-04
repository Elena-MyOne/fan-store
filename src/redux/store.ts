import { configureStore } from '@reduxjs/toolkit';
import FilterSlice from './slices/FilterSlice';
import ProductsSlice from './slices/ProductsSlice';
import PaginationSlice from './slices/PaginationSlice';
import HeaderSlice from './slices/HeaderSlice';
import CartSlice from './slices/CartSlice';

export const store = configureStore({
  reducer: {
    filter: FilterSlice,
    products: ProductsSlice,
    pagination: PaginationSlice,
    header: HeaderSlice,
    cart: CartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
