import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("cartItems")) || [],
    notification: null,
  },
  reducers: {
    addToCart: (state, action) => {
      // Check if product already exists in cart
      const existingItemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingItemIndex >= 0) {
        // Product already in cart - set notification
        state.notification = {
          type: "info",
          message: "This item is already in your cart",
        };
      } else {
        // Add new product to cart
        const newItem = { ...action.payload, quantity: 1 };
        state.items.push(newItem);
        localStorage.setItem("cartItems", JSON.stringify(state.items));

        // Set success notification
        state.notification = {
          type: "success",
          message: "Item added to cart",
        };
      }
    },
    removeFromCart: (state, action) => {
      // Remove item at the specified index
      const index = action.payload;
      state.items.splice(index, 1);

      // Update localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    updateItems: (state, action) => {
      // Update the entire items array
      state.items = action.payload;
    },
    updateCartCount: (state, action) => {
      // This action is used to update the cart count from other components
      // The count is derived from state.items.length, so we don't need to do anything here
    },
    clearNotification: (state) => {
      state.notification = null;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateItems,
  updateCartCount,
  clearNotification,
} = cartSlice.actions;

export default cartSlice.reducer;
