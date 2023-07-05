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

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const index = state.mOrderLines.findIndex((item) => {
        return item._id === product._id;
      });

      if (index === -1) {
        state.mOrderLines.unshift({ ...product, qty: 1 });
      } else {
        state.mOrderLines[index].qty!++;
      }
      updateOrder(state, state.mOrderLines);
    },
    removeOrder: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const orderLines = state.mOrderLines;
      const foundIndex = orderLines.indexOf(product);

      orderLines.map((item: any) => {
        if (item.product_id === product.product_id) {
          item.qty = 1;
        }
        return item;
      });
      orderLines.splice(foundIndex, 1);
      updateOrder(state, orderLines);
    },
    togglePayment: (state, _action: PayloadAction<void>) => {
      state.mIsPaymentMade = !state.mIsPaymentMade;
      state.mGiven = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.transactionAllResult = action.payload;
    });
    builder.addCase(submitPayment.fulfilled, (state, _action) => {
      state.mIsPaymentMade = false;
      state.mGiven = 0;
      state.mOrderLines = [];
    });
  },
});

export default shopSlice.reducer;
export const shopSelector = (state: RootState) => state.shopReducer;
