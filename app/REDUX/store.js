import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducer/appReducer";
import userReducer from "./reducer/userReducer";

export const store=configureStore({
    reducer:{
        app:appReducer,
        user:userReducer
    }
})