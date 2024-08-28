import { createSlice } from "@reduxjs/toolkit"


const initialState=[]

const cartSlice= createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state,action){
         // Create a new item with a unique cartItemId
         const newItem = { ...action.payload, cartItemId: Date.now() };
         state.push(newItem);
        },
        remove(state,action){
            return state.filter(item => item.id !== action.payload);
        },
    }
}) 

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer