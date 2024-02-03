import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface RootState {
  blog_content: BlogContentState;
}

interface BlogContentState {
  blog_content: any;
  status: string;
  error: string | null;
}

export const find_Blogcontent = createAsyncThunk(
  "blog_content/find_Blogcontent",
  async (blogcontent_name: any) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/blog-contents/${blogcontent_name}?populate=*`
      );
      return response.data.data;
    } catch (error) {
      console.log("error", error);
      return [];
    }
  }
);

export const fetch_promotion = createAsyncThunk(
  "blog_content/fecth_promotion",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/blog-contents?populate=*&filters[blog_categories][catagory_name][$in]=hot_deal`
      );
      return response.data.data;
    } catch (error) {
      console.log("error", error);
      return [];
    }
  }
);

export const fecth_tip_trick = createAsyncThunk(
  "blog_content/fecth_tip_trick",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/blog-contents?populate=*&filters[blog_categories][catagory_name][$in]=tip_trick`
      );
      return response.data.data;
    } catch (error) {
      console.log("error", error);
      return [];
    }
  }
);

export const fecth_news_events = createAsyncThunk(
  "blog_content/fecth_news_events",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/blog-contents?populate=*&filters[blog_categories][catagory_name][$in]=news_events`
      );
      return response.data.data;
    } catch (error) {
      console.log("error", error);
      return [];
    }
  }
);

const BlogContentSlice = createSlice({
  name: "blog_content",
  initialState: {
    blog_content: [],
    status: "idle",
    error: null,
  } as BlogContentState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(find_Blogcontent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(find_Blogcontent.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.blog_content = action.payload;
      })
      .addCase(find_Blogcontent.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message; // Ensure state.error is not undefined
      })

      .addCase(fetch_promotion.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetch_promotion.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.blog_content = action.payload;
      })
      .addCase(fetch_promotion.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message; // Ensure state.error is not undefined
      })

      .addCase(fecth_tip_trick.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fecth_tip_trick.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.blog_content = action.payload;
      })
      .addCase(fecth_tip_trick.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message; // Ensure state.error is not undefined
      })

      .addCase(fecth_news_events.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fecth_news_events.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.blog_content = action.payload;
      })
      .addCase(fecth_news_events.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message; // Ensure state.error is not undefined
      });
  },
});

export default BlogContentSlice.reducer;
