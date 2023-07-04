import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type AuthState = {
  count: number;
};

const initialState: AuthState = {
  count: 1,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
export const authSelector = (state: RootState) => state.authReducer;
