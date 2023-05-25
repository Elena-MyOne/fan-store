import { configureStore } from '@reduxjs/toolkit';
import FilterReducer from './slices/FilterSlice';
import ProductsSlice from './slices/ProductsSlice';

export const store = configureStore({
  reducer: {
    filter: FilterReducer,
    products: ProductsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
