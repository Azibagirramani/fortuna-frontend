import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "./types.d";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logger: (state, actions: PayloadAction<boolean>) => {
      state.loggedIn = actions.payload;
    },
  },
});

export const { logger } = userSlice.actions;

export default userSlice.reducer;
