import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import appReducer from "./appSlice";

let store: EnhancedStore = undefined;

export function getStore() {
  if (!store) {
    store = configureStore({
      reducer: { appReducer },
      devTools: true,
    });
  }

  return store;
}

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
