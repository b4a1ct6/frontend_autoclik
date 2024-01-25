import { createSlice, createAsyncThunk, PayloadAction, createAction } from '@reduxjs/toolkit';
import axios from 'axios';


export interface RootState {
  location: LocationState
}

interface LocationState {
  location: any[];
  status: string;
  error: string | null;
}

  
  export const findLocation = createAsyncThunk('location/fetchLocation', async (province:any) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/locations?populate=*&filters[location_province][province_name]=${province}`)
      return response.data.data
    } catch (error) {
      console.log('error', error)
      return []
    }
  });

  export const fecthLocation = createAsyncThunk('location/fecthLocation', async (location_name:any) => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/locations?populate=*&filters[location_name][$contains]=${location_name}`)
      return response.data.data
    } catch (error) {
      console.log('error', error)
      return []
    }
  });
  

  const locationSlice = createSlice({
    name: 'location',
    initialState: {
    location: [],
    status: 'idle',
    error: null,
  } as LocationState,
  reducers: {
  },
  extraReducers: (builder) => {
      builder
        .addCase(findLocation.pending, (state) => {
          state.status = "loading";
        })
        .addCase(findLocation.fulfilled, (state, action:any) => {
          state.status = "succeeded";
          state.location = action.payload;
        })
        .addCase(findLocation.rejected, (state, action:any) => {
          state.status = "failed";
          state.error = action.error.message; // Ensure state.error is not undefined
        }) 
        
        .addCase(fecthLocation.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fecthLocation.fulfilled, (state, action:any) => {
          state.status = "succeeded";
          state.location = action.payload;
        })
        .addCase(fecthLocation.rejected, (state, action:any) => {
          state.status = "failed";
          state.error = action.error.message; // Ensure state.error is not undefined
        }) 
    },
  });

  export default locationSlice.reducer;
