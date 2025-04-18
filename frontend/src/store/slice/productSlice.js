import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axiosInstance";

export const fetchProducts = createAsyncThunk(
  "products/",
  async (rejectWithValue) => {
    try {
      const res = await axios.get("/products/", { withCredentials: true });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    const res = await axios.get(`/products/${id}`);
    return res.data;
  }
);

export const addProduct = createAsyncThunk(
  "products/add",
  async ({ rejectWithValue }) => {
    const res = await axios.post("/products/add", { withCredentials: true });
    console.log(res);
    return;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    loading: false,
    selectedProduct: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.rejected, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
