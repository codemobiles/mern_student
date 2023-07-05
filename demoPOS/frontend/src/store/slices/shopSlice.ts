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

export const getTransactions = createAsyncThunk("shop/transaction", async (): Promise<TransactionResponse[]> => {
  const result = await httpClient.get<TransactionResponse[]>(server.TRANSACTION_URL);
  return result.data;
});

const updateOrder = (state: ShopState, orderLines: any) => {
  let totalPrice = 0;
  let taxAmt = 0;
  for (const item of orderLines) {
    totalPrice += item.price * item.qty;
  }
  taxAmt = totalPrice * 0.07;
  state.mOrderLines = orderLines;
  state.mTotalPrice = totalPrice;
  state.mTaxAmt = taxAmt;
};

export const submitPayment = createAsyncThunk("shop/submit", async (data: any) => {
  const result = await httpClient.post(server.TRANSACTION_URL, data);
  return result.data;
});

const shopSlice = createSlice({ name: "shop", initialState, reducers: {} });

export default shopSlice.reducer;
export const shopSelector = (state: RootState) => state.shopReducer;
