import { Product } from "@/types/product.type";
import { TransactionResponse } from "@/types/transaction.type";
import { server } from "@/utils/constants";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { httpClient } from "@/utils/HttpClient";

export interface ShopState {
  transactionAllResult: TransactionResponse[];
  mOrderLines: Product[];
  mTotalPrice: number;
  mTaxAmt: number;
  mIsPaymentMade: boolean;
  mGiven: number;
}

const initialState: ShopState = {
  transactionAllResult: [],
  mOrderLines: [],
  mTotalPrice: 0,
  mTaxAmt: 0,
  mIsPaymentMade: false,
  mGiven: 0,
};

const shopSlice = createSlice({ name: "shop", initialState, reducers: {} });

export default shopSlice.reducer;
export const shopSelector = (state: RootState) => state.shopReducer;
