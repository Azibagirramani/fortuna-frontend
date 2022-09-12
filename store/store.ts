import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer } from "redux-persist";
import Storage from "./storage";

// reducer imports
import { reducers } from "./reducers";

const persistConfig = {
  key: "root",
  storage: Storage,
};

const persistedReducer = persistReducer(persistConfig, reducers.auth); // Create a new reducer with our existing reducer

const store = () =>
  configureStore({
    reducer: persistedReducer,
    devTools: true,
  });

export type RootState = ReturnType<typeof store>;
export type AppState = ReturnType<RootState["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<RootState>(store);
