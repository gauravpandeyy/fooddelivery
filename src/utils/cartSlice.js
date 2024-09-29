import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
    },
    reducers : {
        // mutating the state ( modifying the existing state itself )
        addItem : (state, action) => {
            state.items.push(action.payload);
        },
        removeItem : (state, ) => {
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0;
        }
    }
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart } = cartSlice.actions;