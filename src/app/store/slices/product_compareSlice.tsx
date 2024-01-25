import { createSlice, createAsyncThunk, PayloadAction, createAction } from '@reduxjs/toolkit';


export interface RootState {
    product_compare: Product_CompareState
}

interface Product_CompareState {
  product_compare: any[];
  status: string;
  error: string | null;
}

  
  export const product_compareData = createAsyncThunk('product_compare/product_compareData', async () => {
    const productcompare = localStorage.getItem('ProductCompare')
    return productcompare? JSON.parse(productcompare) : [];
  });
  

  const product_compareSlice = createSlice({
    name: 'product',
    initialState: {
    product_compare: [],
    status: 'idle',
    error: null,
  } as Product_CompareState,
  reducers: {
  },
  extraReducers: (builder) => {
      builder
        .addCase(product_compareData.pending, (state) => {
          state.status = "loading";
        })
        .addCase(product_compareData.fulfilled, (state, action:any) => {
          state.status = "succeeded";
          state.product_compare = action.payload;
        })
        .addCase(product_compareData.rejected, (state, action:any) => {
          state.status = "failed";
          state.error = action.error.message; // Ensure state.error is not undefined
        }) 
    },
  });

  export default product_compareSlice.reducer;
