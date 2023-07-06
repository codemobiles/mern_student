import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const reportSlice = createSlice({
  name: "report",
  initialState: {},
  reducers: {},
});

export default reportSlice.reducer;
export const {} = reportSlice.actions;
export const reportSelector = (state: RootState) => state.reportReducer;
