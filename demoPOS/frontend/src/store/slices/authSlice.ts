import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  count: number;
};

const initialState: AuthState = {
  count: 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
