import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            const existingItem = state.find(item => item.productId === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                const newItem = { 
                    ...action.payload, 
                    productId: action.payload.id, 
                    cartItemId: Date.now(), 
                    quantity: 1 
                };
                state.push(newItem);
            }
        },
        remove(state, action) {
            return state.filter(item => item.cartItemId !== action.payload);
        },
        increment(state, action) {
            const item = state.find(item => item.cartItemId === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrement(state, action) {
            const item = state.find(item => item.cartItemId === action.payload);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    return state.filter(cartItem => cartItem.cartItemId !== action.payload);
                }
            }
        },
    }
});

export const { add, remove, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
