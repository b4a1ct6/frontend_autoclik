import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface RootState {
  latestPostblog_content: LatestPostBlogContentState;
}

interface LatestPostBlogContentState {
  latestPostblog_content: any;
  status: string;
  error: string | null;
}
export const latestPost_BlogContent = createAsyncThunk(
  "latestPostblog_content/latestPost_BlogContent",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/blog-contents?sort[0]=createdAt:desc&pagination[pageSize]=5`
      );
      return response.data.data;
    } catch (error) {
      console.error("Error fetching promotions:", error);
      return [];
    }
  }
);

const latestPostBlogContentSlice = createSlice({
  name: "latestPostblog_content",
  initialState: {
    latestPostblog_content: [],
    status: "idle",
    error: null,
  } as LatestPostBlogContentState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(latestPost_BlogContent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(latestPost_BlogContent.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.latestPostblog_content = action.payload;
      })
      .addCase(latestPost_BlogContent.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message; // Ensure state.error is not undefined
      });
  },
});

export default latestPostBlogContentSlice.reducer;
