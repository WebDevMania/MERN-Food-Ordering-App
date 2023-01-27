import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = state.products.find((product) => product._id === action.payload._id)
            if(product){
                product.quantity += action.payload.quantity
            } else {
                state.products.push(action.payload)
            }
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product._id !== action.payload._id)
        }
    }
})

export const {addProduct, removeProduct, emptyCart, toggleShowCart} = cartSlice.actions

export default cartSlice.reducer