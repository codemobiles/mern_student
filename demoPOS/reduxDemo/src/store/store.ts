import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import appReducer from "./appSlice";

let store: any = undefined;

export function getStore() {
  if (!store) {
    store = configureStore({
      reducer: { appReducer },
    });
  }

  return store;
}

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
