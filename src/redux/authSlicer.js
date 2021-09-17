import { createSlice } from "@reduxjs/toolkit";

export const authSlicer = createSlice({
  name: "auth",
  initialState: {
    authenticated: false,
    username: "",
  },
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      if (username === "user" && password === "123") {
        state.authenticated = true;
        state.username = username;
      } else {
        state.authenticated = false;
      }
    },
    logout: (state, action) => {
      state.authenticated = false;
      state.username = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = authSlicer.actions;

export default authSlicer.reducer;
