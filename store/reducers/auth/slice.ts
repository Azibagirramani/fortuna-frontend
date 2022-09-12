import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../../store";

import type { Auth } from "./types.d";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
    userObj: null,

    // {
    //   uid: "H4doVsPWgFZZ3AzkGsjnS7TAfTB2",
    //   email: "kelvinmansi2@gmail.com",
    // }
  } as Auth,
  reducers: {
    setUser: (state: Auth, actions: PayloadAction<any>) => {
      state.userObj = {
        ...state.userObj,
        ...actions.payload,
      };
      state.loggedIn = true;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (!action.payload) {
        return state;
      }
      state.userObj = {
        ...state.userObj,
        ...action.payload.auth.userObj,
      };
    },
  },
});

export const { setUser } = authSlice.actions;
export const selectAuth = (state: AppState) => state;
export default authSlice.reducer;
