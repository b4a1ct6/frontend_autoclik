import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface RootState {
  product: ProductState;
}

interface ProductState {
  url: any; // Adjust this to the actual type of your product data
  status: string;
  error: string | null;
}

  export const convertToSlug = createAsyncThunk('changeURL/convertToSlug', async (url:any) => {
    return url.toLowerCase().replace(/[^\w\s-]/g, '-').replace(/\s+/g, '-').replace(/--+/g, '-').trim();
  })
  
  const changeURLSlice = createSlice({
    name: 'url',
    initialState: {
    url: [],
    status: 'idle',
    error: null,
  } as ProductState, // Specify the type for the state
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(convertToSlug.pending, (state) => {
          state.status = "loading";
        })
        .addCase(convertToSlug.fulfilled, (state, action:any) => {
          state.status = "succeeded";
          state.url = action.payload;
        })
        .addCase(convertToSlug.rejected, (state, action:any) => {
          state.status = "failed";
          state.error = action.error.message; // Ensure state.error is not undefined
        }) 
    },
  });

  export default changeURLSlice.reducer;
