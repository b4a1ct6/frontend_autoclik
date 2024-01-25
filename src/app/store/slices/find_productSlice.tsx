import { createSlice, createAsyncThunk, PayloadAction, createAction } from '@reduxjs/toolkit';
import { convertToSlug } from './changeURLSlice';
import { fetchProducts } from './productSlice';
import axios from 'axios';


export interface RootState {
  product: ProductState
}

interface ProductState {
  product: any[];
  status: string;
  error: string | null;
}

  
  export const find_product = createAsyncThunk('product/find_product', async (id: any, { dispatch }: { dispatch: any }) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/products/${id}?populate=*`)
      return response.data
    } catch (error) {
      console.log('error', error)
      return []
    }
  });
  

  const find_productSlice = createSlice({
    name: 'product',
    initialState: {
    product: [],
    result_product: [],
    status: 'idle',
    error: null,
  } as ProductState,
  reducers: {
  },
  extraReducers: (builder) => {
      builder
        .addCase(find_product.pending, (state) => {
          state.status = "loading";
        })
        .addCase(find_product.fulfilled, (state, action:any) => {
          state.status = "succeeded";
          state.product = action.payload;
        })
        .addCase(find_product.rejected, (state, action:any) => {
          state.status = "failed";
          state.error = action.error.message; // Ensure state.error is not undefined
        }) 
    },
  });

  export default find_productSlice.reducer;
