import { combineReducers } from 'redux';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchProducts } from './productSlice';

// Interface สำหรับ State แต่ละประเภท
interface Product_filterState {
  product_filter: any[];
  status: string;
  error: string | null;
}

interface Product_ResultsState {
  product_results: any[];
  status: string;
  error: string | null;
}

// Interface สำหรับ RootState ที่มีทั้ง 2 State
export interface RootState {
  product_filter: Product_filterState;
  product_results: Product_ResultsState;
}

// Async Thunk Actions
// export const fetchProduct_brandsFilter = createAsyncThunk('product_filter/fetch_product_filter', async () => {
//   try {
//     const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/product-brands?populate=*`);
//     return response.data;
//   } catch (error) {
//     console.log('error', error);
//     return [];
//   }
// });

export const fetchProduct_brandsFilter = createAsyncThunk('product_filter/fetchProduct_brandsFilter', async (type_name:any) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/product-brands?populate=*&filters[product_type][type_name][$in]=${type_name}`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return [];
  }
});

export const findProduct_TypesFilter = createAsyncThunk('product_filter/findProduct_TypesFilter', async (brand_name:any) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/product-brands?populate=*&filters[brand_name][$in]=${brand_name}`);
    return response.data.data[0].attributes.product_type.data.attributes.type_name;
  } catch (error) {
    console.log('error', error);
    return [];
  }
});

export const fetchProduct_TirediameterFilter = createAsyncThunk('product_filter/fetchProduct_diameterFilter', async() =>{
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/product-diameters?populate=*`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return [];
  }
})

export const fetchProduct_TiretypeFilter = createAsyncThunk('product_filter/fetchProduct_typeFilter', async() =>{
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/product-types?populate=*`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return [];
  }
})

export const fetchProduct_TirewidthFilter = createAsyncThunk('product_filter/fetchProduct_TirewidthFilter', async() =>{
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/product-widths?populate=*`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return [];
  }
})

export const fetchProduct_TireratioFilter = createAsyncThunk('product_filter/fetchProduct_TireratioFilter', async() =>{
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/product-ratios?populate=*`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return [];
  }
})

export const fetchProduct_LubeOil_fluid_typeFilter = createAsyncThunk('product_filter/fetchProduct_LubeOil_fluid_typeFilter', async() =>{
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/product-lubeoil-fluid-types?populate=*`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return [];
  }
})

export const fetchProduct_LubeOil_engineOil_typesofengineoilFilter = createAsyncThunk('product_filter/fetchProduct_LubeOil_engineOil_typesofengineoilFilter', async() =>{
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/product-typesofengineoils?populate=*`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return [];
  }
})

export const fetchProduct_ShockAbsorber_shockuptype = createAsyncThunk('product_filter/fetchProduct_ShockAbsorber_shockuptype', async() =>{
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/product-shockuptypes?populate=*`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return [];
  }
})

export const fetchProduct_Brake_braketype = createAsyncThunk('product_filter/fetchProduct_Brake_braketype', async() =>{
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/product-braketypes?populate=*`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return [];
  }
})

export const fetchProduct_Battery_amp = createAsyncThunk('product_filter/fetchProduct_Battery_amp', async() =>{
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/product-amps?populate=*`);
    return response.data;
  } catch (error) {
    console.log('error', error);
    return [];
  }
})


// Slices
const productFilterSlice = createSlice({
  name: 'product_filter',
  initialState: {
    product_filter: [],
    status: 'idle',
    error: null,
  } as Product_filterState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct_brandsFilter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct_brandsFilter.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.product_filter = action.payload;
      })
      .addCase(fetchProduct_brandsFilter.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      
      .addCase(fetchProduct_TirediameterFilter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct_TirediameterFilter.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.product_filter = action.payload;
      })
      .addCase(fetchProduct_TirediameterFilter.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(fetchProduct_TiretypeFilter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct_TiretypeFilter.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.product_filter = action.payload;
      })
      .addCase(fetchProduct_TiretypeFilter.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(fetchProduct_TirewidthFilter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct_TirewidthFilter.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.product_filter = action.payload;
      })
      .addCase(fetchProduct_TirewidthFilter.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(fetchProduct_TireratioFilter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct_TireratioFilter.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.product_filter = action.payload;
      })
      .addCase(fetchProduct_TireratioFilter.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(fetchProduct_LubeOil_fluid_typeFilter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct_LubeOil_fluid_typeFilter.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.product_filter = action.payload;
      })
      .addCase(fetchProduct_LubeOil_fluid_typeFilter.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(fetchProduct_LubeOil_engineOil_typesofengineoilFilter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct_LubeOil_engineOil_typesofengineoilFilter.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.product_filter = action.payload;
      })
      .addCase(fetchProduct_LubeOil_engineOil_typesofengineoilFilter.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(fetchProduct_Brake_braketype.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct_Brake_braketype.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.product_filter = action.payload;
      })
      .addCase(fetchProduct_Brake_braketype.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(fetchProduct_Battery_amp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct_Battery_amp.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.product_filter = action.payload;
      })
      .addCase(fetchProduct_Battery_amp.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(findProduct_TypesFilter.pending, (state) => {
        state.status = "loading";
      })
      .addCase(findProduct_TypesFilter.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.product_filter = action.payload;
      })
      .addCase(findProduct_TypesFilter.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

const productResultsSlice = createSlice({
  name: 'product_results',
  initialState: {
    product_results: [],
    status: 'idle',
    error: null,
  } as Product_ResultsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(filterProducts.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(filterProducts.fulfilled, (state, action: any) => {
      //   state.status = "succeeded";
      //   state.product_results = action.payload;
      // })
      // .addCase(filterProducts.rejected, (state, action: any) => {
      //   state.status = "failed";
      //   state.error = action.error.message;
      // });
  },
});

// Export Reducers
export const { } = productFilterSlice.actions;
export const { } = productResultsSlice.actions;

// Combine Reducers
const rootReducer = combineReducers({
  product_filter: productFilterSlice.reducer,
  product_results: productResultsSlice.reducer,
});

export default rootReducer;
