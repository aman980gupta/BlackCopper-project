import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import authSlice from "./authSlice";
import { apiSlice } from "./apiSlice";
import dummySlice from "../features/dummyapi/dummySlice";
import { dummyApi } from "../features/dummyapi/dummyApiSlice";

export const store = configureStore({
    reducer:{
        // auth:authSlice,
        // [apiSlice.reducerPath]:apiSlice.reducer,
        product:dummySlice,
        [dummyApi.reducerPath] : dummyApi.reducer
        

    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(dummyApi.middleware),
    devTools:true,
    

});
