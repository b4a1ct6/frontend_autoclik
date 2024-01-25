import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface RootState {
  warranty: warrantyState;
}   

interface warrantyState {
  warranty: any;
  status: string;
  error: string | null;
}

  export const FetchWarranty = createAsyncThunk('warranty/FetchWarranty', async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/warranties?populate=*`)
        return response.data.data[0]
      } catch (error) {
        console.log('error', error)
        return []
      }
  })
  
  const warrantySlice = createSlice({
    name: 'warranty',
    initialState: {
    warranty: [],
    status: 'idle',
    error: null,
  } as warrantyState, // Specify the type for the state
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(FetchWarranty.pending, (state) => {
          state.status = "loading";
        })
        .addCase(FetchWarranty.fulfilled, (state, action:any) => {
          state.status = "succeeded";
          state.warranty = action.payload;
        })
        .addCase(FetchWarranty.rejected, (state, action:any) => {
          state.status = "failed";
          state.error = action.error.message; // Ensure state.error is not undefined
        }) 
    },
  });

  export default warrantySlice.reducer;
