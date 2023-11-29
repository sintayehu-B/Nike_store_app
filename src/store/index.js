import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./ProductsSlice";
import { cartSlice } from "./cartSlice";

export const store = configureStore({
  reducer: {
    products: ProductSlice.reducer,
    cart: cartSlice.reducer,
  },
});
