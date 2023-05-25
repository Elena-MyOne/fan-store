import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { ProductsData } from '../../models/interface';

export interface ProductsState {
  isLoading: boolean;
  products: ProductsData[];
}

const initialState: ProductsState = {
  isLoading: true,
  products: [],
};

export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setProducts(state, action: PayloadAction<ProductsData[]>) {
      state.products = action.payload;
    },
  },
});

export const { setProducts, setIsLoading } = ProductsSlice.actions;
export default ProductsSlice.reducer;
