import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice";
import cartSlice from "./slices/cart.slice";

const store = configureStore({
    reducer: {
        products,
        cartSlice,
    }
});

export default store;