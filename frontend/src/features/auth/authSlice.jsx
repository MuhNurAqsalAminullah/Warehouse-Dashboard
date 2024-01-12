import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.role = action.payload;
      state.error = null;
    },
    logout: (state, action) => {
      (state.loggedIn = false), (state.role = null), (state.error = null);
    },
  },
});

export const { login, setError, logout } = authSlice.actions;
export default authSlice.reducer;
