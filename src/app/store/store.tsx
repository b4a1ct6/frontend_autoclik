import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice'
import changeURLReducer from './slices/changeURLSlice';
import find_productReducer from './slices/find_productSlice';
import warrantyReducer from './slices/warrantySlice';
import product_filterReducer from './slices/product_filterSlice';
import promotionReducer from './slices/blog_contentSlice';
import blog_categoryReducer from './slices/blog_categorySlice';
import product_compareReducer from './slices/product_compareSlice';
import locationReducer from './slices/locationSlice';
import join_usReducer from './slices/join_usSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    changeURL: changeURLReducer,
    find_product: find_productReducer,
    warranty: warrantyReducer,
    product_filter: product_filterReducer,
    promotion: promotionReducer,
    blog_category: blog_categoryReducer,
    product_compare: product_compareReducer,
    location:locationReducer,
    join_us:join_usReducer
  },
});

export default store;
