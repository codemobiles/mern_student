import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "@/store/slices/authSlice";
import stockReducer from "@/store/slices/stockSlice";
import shopReducer from "@/store/slices/shopSlice";

export const store = configureStore({
  reducer: { authReducer, stockReducer, shopReducer },
});

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
