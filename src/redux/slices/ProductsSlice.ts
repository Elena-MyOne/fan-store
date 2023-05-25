import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { ProductsData } from '../../models/interface';

export interface ProductsState {
  products: ProductsData[];
}

const initialState: ProductsState = {
  products: [],
};

export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductsData[]>) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;
