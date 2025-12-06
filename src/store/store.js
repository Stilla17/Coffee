import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./features/toggleSlice";
import counterReducer from './features/counterProductSlice';
import filterReducer from './features/filterSlice';

const store = configureStore({
    reducer: {
        toggle: toggleReducer,
        counterProduct: counterReducer,
        searchFilter: filterReducer,
    }
});

export default store;