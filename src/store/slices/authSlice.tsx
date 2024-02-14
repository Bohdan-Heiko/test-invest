import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  hasLoggedOut: false,
  token: "",
  role: "",
};

const name = "bover_auth";

export const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    userRole: (state, { payload }) => {
      state.role = payload;
    },
    loginUser: (state, { payload }: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.token = payload;
    },
    logoutUser: () => {
      return { ...initialState, hasLoggedOut: true };
    },
    resetAuth: () => {
      return initialState;
    },
  },
});

export const { loginUser, logoutUser, resetAuth, userRole } = authSlice.actions;

export default authSlice;
