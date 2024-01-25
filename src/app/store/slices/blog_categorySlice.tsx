import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface RootState {
  blog_category: Blog_categoryState;
}

interface Blog_categoryState {
  blog_category: any; 
  status: string;
  error: string | null;
}

  export const fetchBlog_category = createAsyncThunk('blog_category/fetchBlog_category', async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/blog-categories?populate=*`)
        return response.data.data
      } catch (error) {
        console.log('error', error)
        return []
      }
  })

  const blog_categorySlice = createSlice({
    name: 'blog_category',
    initialState: {
    blog_category: [],
    status: 'idle',
    error: null,
  } as Blog_categoryState,
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(fetchBlog_category.pending, (state) => {
          state.status = "loading";
        })
        .addCase(fetchBlog_category.fulfilled, (state, action:any) => {
          state.status = "succeeded";
          state.blog_category = action.payload;
        })
        .addCase(fetchBlog_category.rejected, (state, action:any) => {
          state.status = "failed";
          state.error = action.error.message; // Ensure state.error is not undefined
        }) 
    },
  });

  export default blog_categorySlice.reducer;
