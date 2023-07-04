import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type AuthState = {
  count: number;
};

const initialState: AuthState = {
  count: 1,
};

export const addAsync = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 1;
};

export const removeAsync = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return -1;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  // synchronous
  reducers: {
    add: (state) => {
      state.count++;
    },
    remove: (state) => {
      state.count--;
    },
  },
  // asynchronous
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
export const authSelector = (state: RootState) => state.authReducer;
export const { add, remove } = authSlice.actions;
