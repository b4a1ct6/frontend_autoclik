import { createSlice, createAsyncThunk, PayloadAction, createAction } from '@reduxjs/toolkit';
import axios from 'axios';


export interface RootState {
  join_us: Join_usState
}

interface Join_usState {
  join_us: any[];
  status: string;
  error: string | null;
}

  
  export const fetch_join_us = createAsyncThunk('join_us/fetch_join_us', async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/join-uses?populate=*`)
      return response.data
    } catch (error) {
      console.log('error', error)
      return []
    }
  });
  

  const join_usSlice = createSlice({
    name: 'product',
    initialState: {
    join_us: [],
    status: 'idle',
    error: null,
  } as Join_usState,
  reducers: {
  },
  extraReducers: (builder) => {
      builder
        .addCase(fetch_join_us.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetch_join_us.fulfilled, (state, action:any) => {
          state.status = "succeeded";
          state.join_us = action.payload;
        })
        .addCase(fetch_join_us.rejected, (state, action:any) => {
          state.status = "failed";
          state.error = action.error.message; // Ensure state.error is not undefined
        }) 
    },
  });

  export default join_usSlice.reducer;
