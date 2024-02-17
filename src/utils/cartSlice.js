import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: ['Banana', 'apple']
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: () => {
            items = [];
        }
    }
})

export const { addItems, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;