import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

// reducer imports
import { reducers } from "./reducers"

export const store = configureStore({
    reducer: {
        ...reducers
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export type AppDispatch = typeof store.dispatch