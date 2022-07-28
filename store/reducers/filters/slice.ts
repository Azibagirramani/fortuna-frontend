import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "./types.d";

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilter: (state, actions: PayloadAction<boolean>) => {
      console.log("updateFilter", actions.payload);
    },
  },
});

export const { updateFilter } = filterSlice.actions;

export default filterSlice.reducer;
