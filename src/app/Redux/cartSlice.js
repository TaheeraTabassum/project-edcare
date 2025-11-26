import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],       // cart er products
    totalQuantity: 0,
    totalPrice: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((p) => p.course_id === item.course_id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += item.price;
      } else {
        state.items.push({
          ...item,
          quantity: 1,
          totalPrice: item.price,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const item = state.items.find((p) => p.course_id === id);

      if (!item) return;

      state.totalQuantity -= item.quantity;
      state.totalPrice -= item.totalPrice;

      state.items = state.items.filter((p) => p.course_id !== id);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
