import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/productSlice";
import cartReducer from "./slice/cartSlice";

const rootReducers = combineReducers({
    productStore : productReducer,
    cartReducer : cartReducer
});

const store = configureStore({
    reducer : rootReducers
});

export default store;