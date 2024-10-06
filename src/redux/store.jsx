import { configureStore } from "@reduxjs/toolkit";

export const reduxStore = configureStore({
    reducer: {
        teams: pers
    }
})

export const persist = configureStore(reduxStore)