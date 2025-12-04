import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./features/toggleSlice";
import counterReducer from './features/counterProductSlice';
const store = configureStore({
    reducer: {
        toggle: toggleReducer,
        counterProduct: counterReducer,
    }
});

export default store;