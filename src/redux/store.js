import { configureStore } from "@reduxjs/toolkit";

import cartItemSlice from './shopping-cart/cartItemSlice'

export const store = configureStore({
    reducer: {
        cartItems: cartItemSlice
    }
})