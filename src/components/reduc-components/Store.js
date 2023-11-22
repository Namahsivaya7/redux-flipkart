import { configureStore } from "@reduxjs/toolkit";
import ProductDetails from "./ProductSlice";


export const Store = configureStore({
    reducer: {
        product: ProductDetails,
    },
});