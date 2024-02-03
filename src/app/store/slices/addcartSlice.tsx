import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "cookies-next";
import { fetchCart } from "./cartSlice";

export interface RootAddCartState {
  addcart: AddCartState;
}

interface AddCartState {
  addcart: any; // Adjust this to the actual type of your product data
  status: string;
  error: string | null;
}

const token = getCookie("token");

export const AddCart = createAsyncThunk(
  "cart/AddCart",
  async (formData: any, { dispatch }) => {
    let data = JSON.stringify({
      data: {
        quantity: formData.quantity,
        product: {
          id: formData.product_id,
        },
        users_permissions_user: {
          id: formData.user_id,
        },
      },
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/carts?populate=*`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response: { data: any; }) => {
        // console.log(JSON.stringify(response.data));
        dispatch(fetchCart())
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
);

const addcartSlice = createSlice({
  name: "url",
  initialState: {
    addcart: [],
    status: "idle",
    error: null,
  } as AddCartState, // Specify the type for the state
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(AddCart.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.addcart = action.payload;
      })
      .addCase(AddCart.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message; // Ensure state.error is not undefined
      })
  },
});

export default addcartSlice.reducer;
