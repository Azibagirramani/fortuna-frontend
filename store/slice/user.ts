import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../";

// declaring the types for our state
export type UserState = {
  user: object;
  IsLoggedIn: boolean;
};

const initialState: UserState = {
  user: {},
  IsLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      const data = action.payload.data;
      localStorage.setItem("local-token", data.token); // set local token
      state.user = {
        ...data.user,
      };
      state.IsLoggedIn = true;
    },
  },
});
export const { setUser } = userSlice.actions;
export const selectUser = (state: RootState) => state;
export default userSlice.reducer;
