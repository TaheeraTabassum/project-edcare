
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterslice"
import cartSlice from "./cartSlice"

const store = configureStore({
    reducer:{
     counter:counterSlice,
     cart:cartSlice
    }
})

export default store;