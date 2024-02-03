import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice'
import changeURLReducer from './slices/changeURLSlice';
import find_productReducer from './slices/find_productSlice';
import warrantyReducer from './slices/warrantySlice';
import product_filterReducer from './slices/product_filterSlice';
import blog_contentReducer from './slices/blog_contentSlice';
import blog_categoryReducer from './slices/blog_categorySlice';
import product_compareReducer from './slices/product_compareSlice';
import locationReducer from './slices/locationSlice';
import join_usReducer from './slices/join_usSlice';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';
import addcartReducer from './slices/addcartSlice';
import pageblog_contentReducer from './slices/pageblog_contentSlice';
import latestPostblog_contentReducer from './slices/latestPostblog_contentSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    changeURL: changeURLReducer,
    find_product: find_productReducer,
    warranty: warrantyReducer,
    product_filter: product_filterReducer,
    blog_content: blog_contentReducer,
    blog_category: blog_categoryReducer,
    product_compare: product_compareReducer,
    location:locationReducer,
    join_us:join_usReducer,
    user:userReducer,
    cart:cartReducer,
    addcart:addcartReducer,
    pageblog_content:pageblog_contentReducer,
    latestPostblog_content:latestPostblog_contentReducer
  },
});

export default store;
