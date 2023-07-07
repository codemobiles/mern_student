import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const appSlice = createSlice({
  name: "app",
  initialState: {},
  reducers: {},
});

export default appSlice.reducer;
export const appSelector = (state: RootState) => state.appReducer;
