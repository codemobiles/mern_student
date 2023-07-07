import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type StateProps = {
  count: number;
};

const initialState: StateProps = {
  count: 0,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    add: (state) => {
      state.count++;
    },
    remove: (state) => {
      state.count--;
    },
  },
});

export default appSlice.reducer;
export const { add, remove } = appSlice.actions;
export const appSelector = (state: RootState) => state.appReducer;
