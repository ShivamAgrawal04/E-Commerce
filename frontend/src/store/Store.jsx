import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice"; // Ensure this path is correct
import productReducer from "./slice/productSlice";
import cartReducer from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
