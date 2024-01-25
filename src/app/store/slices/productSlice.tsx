import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import axios, { all } from 'axios'

export interface RootState {
  product: ProductState
  product_filter_results: product_filter_resultsState
}

interface product_filter_resultsState {
  product_filter_results: any[]; // Adjust this to the actual type of your product data
  status: string;
  error: string | null;
}

interface ProductState {
  product: any[]; // Adjust this to the actual type of your product data
  status: string;
  error: string | null;
}

export const findProduct = createAsyncThunk('product/findProduct', async (id: any) => {
  try {
    const allProductResults = await Promise.all(id.map(async (product_id: any) => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/products/${product_id}?populate=*`);
      return response.data.data;
    }));

    return allProductResults;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error; // Propagate the error
  }
});


export const fetchProducts = createAsyncThunk('product/fetchProducts',async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/products?populate=*`)
    return response.data.data
  } catch (error) {
    console.log('error', error)
    return []
  }
})

export const fetchProductsOfTypes = createAsyncThunk('product_filter_results/fetchProductsOfTypes', async (types_name: any, { dispatch }: { dispatch: any }) => {
  try {
    const allProductResults = await Promise.all(types_name.map(async (_types_name: any) => {
      const allBrandsOfTypes = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/product-types?populate=*&filters[type_name]=${_types_name}`);
      const brandsData = allBrandsOfTypes.data.data[0]?.attributes.product_brands.data || [];

      const productsByBrands = await Promise.all(brandsData.map(async (brand: any) => {
        const allProductsOfBrand = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/products?populate=*&filters[product_brand][brand_name][$contains]=${brand.attributes.brand_name}`);
        return allProductsOfBrand.data.data;
      }));

      return {
        type_name: _types_name,
        products: productsByBrands.flat(),
      };
    }));

    const organizedData: Record<string, any[]> = {};

    allProductResults.forEach((result) => {
      organizedData[result.type_name] = result.products;
    });

    // console.log(organizedData)
    return organizedData;

  } catch (error) {
    console.log('error', error);
    return {};
  }
});




export const related_products = createAsyncThunk('product/related_products',async (brands_name:any) => {
    try {
      // เรียกหา Type จาก Brands
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/product-types?populate=*&filters[product_brands][brand_name][$contains]=${brands_name}`
      );

      // ลูปเอาค่า Brands และ แสดงสินค้าทั้งหมดที่อยู่ใน Type นั้นๆ
      const all_brands_in_type = response.data.data[0].attributes.product_brands.data.map(async (res:any,index:any) => {
        const related_product_result = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/products?populate=*&[filters][product_brand][brand_name][$in][]=${res.attributes.brand_name}`)
        return related_product_result
      })
      const results = await Promise.all(all_brands_in_type)
      const product = results.map(async (res: any) => {
        const response = await res.data.data.map((item: any) => {
          return item;  // ส่งค่าแต่ละ item ออกมา
        });
        return response;
      });
      

      const product_results = await Promise.all(product);
      //กระจายข้อมูลใน Array
      const flattenedResults = product_results.flatMap(items => items);
      // สุ่มข้อมูล
      const randomizedData = flattenedResults.sort(() => Math.random() - 0.5).slice(0, 3);
      return randomizedData;

    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
);

  const productSlice = createSlice({
    name: 'product',
    initialState: {
    product: [],
    status: 'idle',
    error: null,
  } as ProductState, // Specify the type for the state
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchProducts.fulfilled, (state, action:any) => {
          state.status = "succeeded";
          state.product = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action:any) => {
          state.status = "failed";
          state.error = action.error.message; // Ensure state.error is not undefined
        })

        .addCase(related_products.pending, (state) => {
          state.status = "loading";
        })
        .addCase(related_products.fulfilled, (state, action:any) => {
          state.status = "succeeded";
          state.product = action.payload;
        })
        .addCase(related_products.rejected, (state, action:any) => {
          state.status = "failed";
          state.error = action.error.message; // Ensure state.error is not undefined
        })

        .addCase(findProduct.pending, (state) => {
          state.status = "loading";
        })
        .addCase(findProduct.fulfilled, (state, action:any) => {
          state.status = "succeeded";
          state.product = action.payload;
        })
        .addCase(findProduct.rejected, (state, action:any) => {
          state.status = "failed";
          state.error = action.error.message; // Ensure state.error is not undefined
        })
    },

    
  });

  const product_filter_resultsSlice = createSlice({
    name: 'product_filter_results',
    initialState: {
    product_filter_results: [],
    status: 'idle',
    error: null,
  } as product_filter_resultsState, // Specify the type for the state
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(fetchProductsOfTypes.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchProductsOfTypes.fulfilled, (state, action:any) => {
          state.status = "succeeded";
          state.product_filter_results = action.payload;
        })
        .addCase(fetchProductsOfTypes.rejected, (state, action:any) => {
          state.status = "failed";
          state.error = action.error.message; // Ensure state.error is not undefined
        })
    },
  });

  export const { } = productSlice.actions
  export const { } = product_filter_resultsSlice.actions

  const rootReducer = combineReducers({
    product: productSlice.reducer,
    product_filter_results: product_filter_resultsSlice.reducer,
  });

  export default rootReducer;
