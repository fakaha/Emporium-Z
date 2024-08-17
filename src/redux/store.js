import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'

const store = configureStore({
    reducer: { cart: cartReducer},
});

console.log('create store', store.getState());

store.subscribe(() => {
    console.log('store change ',store.getState() );
})

export default store