import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    toggle(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const authActions = authSlice.actions;

export default authSlice;
