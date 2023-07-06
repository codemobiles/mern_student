import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "@/store/slices/authSlice";
import stockReducer from "@/store/slices/stockSlice";
import shopReducer from "@/store/slices/shopSlice";
import reportReducer from "@/store/slices/reportSlice";

let store: any = undefined;

export function getStore() {
  if (!store) {
    store = configureStore({
      reducer: { authReducer, stockReducer, shopReducer, reportReducer },
    });
  }

  return store;
}

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
