import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import Products from "../components/products";
import productsReducer from './productsSlice'
const store= configureStore({
    reducer:{
        cart:cartReducer,
        products: productsReducer,
    }
})
export default store