import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "cookies-next";
import { fetchUserData } from "./userSlice";

export interface RootCartState {
  cart: CartState;
}

interface CartState {
  cart: any; // Adjust this to the actual type of your product data
  status: string;
  error: string | null;
}

const token = getCookie("token");

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  if (!token) {
    return null;
  }

  const responseUser = await fetch(
    `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/users/me`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const responseUserJSON = await responseUser.json();

  const responseCart = await fetch(
    `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/carts?populate=*&filters[users_permissions_user][username]=${responseUserJSON.username}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const responseCartJSON = await responseCart.json();

  const productPromises = await Promise.all(
    responseCartJSON.data.map(async (row: any) => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/products/${row.attributes.product.data.id}?populate=*`
      );
      return response.data.data;
    })
  );

  const cartValue = await Promise.all(
    responseCartJSON.data.map(async (row: any) => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/products/${row.attributes.product.data.id}?populate=*`
      );
      const productData = response.data.data;

      // Calculate total value for each product
      const totalValue =
        productData.attributes.product_price * row.attributes.quantity;

      return {
        ...productData,
        totalValue,
      };
    })
  );

  // Calculate total value for the entire cart
  const totalCartValue = cartValue.reduce(
    (total, product) => total + product.totalValue,
    0
  );

  //   return responseJSON
  return [productPromises, responseCartJSON, totalCartValue];
});

export const UpdateCart = createAsyncThunk(
  "cart/UpdateCart",
  async (update: any, { dispatch }) => {
    let data = JSON.stringify({
      data: {
        quantity: update.quantity,
      },
    });

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/carts/${update.id}?populate=*`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        dispatch(fetchCart());
        // console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

export const DeleteCart = createAsyncThunk(
  "cart/DeleteCart",
  async (id: any, { dispatch }) => {
    let data = "";

    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_APP_STRAPI_BASE_URL}/api/carts/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      // Dispatch fetchCart after successfully deleting
      dispatch(fetchCart());
      // console.log(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  }
);

const cartSlice = createSlice({
  name: "url",
  initialState: {
    cart: [],
    status: "idle",
    error: null,
  } as CartState, // Specify the type for the state
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCart.fulfilled, (state, action: any) => {
        state.status = "succeeded";
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action: any) => {
        state.status = "failed";
        state.error = action.error.message; // Ensure state.error is not undefined
      });
  },
});

export default cartSlice.reducer;
