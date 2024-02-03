import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface RootState {
  pageblog_content: PageBlogContentState;
}

interface PageBlogContentState {
  pageblog_content: any;
  status: string;
  error: string | null;
}

export const page_BlogContent = createAsyncThunk(
  "blog_content/page_BlogContent",
  async (blogContnet_id: any) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/blog-contents?sort[0]=id:desc`
      );
      const data = response.data.data;
      const index = data.findIndex(
        (row: any) => row.id === Number(blogContnet_id)
      );

      let resultArray = [];

      if (index >= 0) {
        const currentData = data[index];

        // ข้อมูลถัดไป
        const nextData = index + 1 < data.length ? data[index + 1] : null;

        // ข้อมูลก่อนหน้า
        const previousData = index - 1 >= 0 ? data[index - 1] : null;

        // เพิ่มข้อมูลลงใน resultArray
        resultArray.push(nextData);
        resultArray.push(currentData);
        resultArray.push(previousData);
      }

      return resultArray;
    } catch (error) {
      console.error("Error fetching promotions:", error);
      return [];
    }
  }
);

const PageBlogContentSlice = createSlice({
  name: "pageblog_content",
  initialState: {
    pageblog_content: [],
    status: "idle",
    error: null,
  } as PageBlogContentState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(page_BlogContent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(page_BlogContent.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.pageblog_content = action.payload;
      })
      .addCase(page_BlogContent.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message; // Ensure state.error is not undefined
      })
  },
});

export default PageBlogContentSlice.reducer;
