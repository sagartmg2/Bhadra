import { createSlice } from '@reduxjs/toolkit'

// let  initialState = null // after login // {name, email , role}
let initialState = {
    cart_items: []
} // after login // {name, email , role}

export let CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart_items = action.payload
            // state = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setCart } = CartSlice.actions

export default CartSlice.reducer