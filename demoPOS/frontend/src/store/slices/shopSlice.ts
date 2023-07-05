import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const shopSlice = createSlice({ name: "shop", initialState: {}, reducers: {} });

export default shopSlice.reducer;
export const shopSelector = (state: RootState) => state.shopReducer;
