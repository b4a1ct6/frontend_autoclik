import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";

export interface RootUserState {
  user: UserState;
}

interface UserState {
  user: any[];
  status: string;
  error: string | null;
}

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const token = getCookie("token");

    // Check if token is available
    if (!token) {
      return null;
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/users/me`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Error fetching user data: ${response.status}`);
    }
    
    const responseJSON = await response.json();
    return responseJSON;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    status: "idle",
    error: null,
  } as UserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserData.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message; // Ensure state.error is not undefined
      });
  },
});

export default userSlice.reducer;
