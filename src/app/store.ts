// jshint esversion:6
import { configureStore } from "@reduxjs/toolkit";

// API Slice 
import { emptySplitApi } from "./services";

export const store = configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [emptySplitApi.reducerPath]: emptySplitApi.reducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself          
export type RootState = ReturnType<typeof store.getState>

// AppDispatch type
export type AppDispatch = typeof store.dispatch                 