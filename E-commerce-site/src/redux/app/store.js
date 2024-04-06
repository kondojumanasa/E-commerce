import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../app/features/cartSlice";

// create store
export const store = configureStore({
    reducer:{
        allCart:cartSlice
    }
})