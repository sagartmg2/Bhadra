import { createSlice } from '@reduxjs/toolkit'

let initial = localStorage.getItem("login") ? JSON.parse(localStorage.getItem("login")) : false

const initialState = {
    value: initial
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoginStatus: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            console.log(state.value)
            console.log(action)
            state.value = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setLoginStatus } = authSlice.actions

export default authSlice.reducer