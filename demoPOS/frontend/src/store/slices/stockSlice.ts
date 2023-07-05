import { Product } from "@/types/product.type";
import { httpClient } from "@/utils/HttpClient";
import { server } from "@/utils/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface StockState {
  stockAllResult: Product[];
  stockOneResult: Product | null;
}

const initialState: StockState = {
  stockAllResult: [],
  stockOneResult: null,
};

// Query
export const getProducts = createAsyncThunk("stock/getAll", async (keyword: string): Promise<Product[]> => {
  if (keyword) {
    const result = await httpClient.get<Product[]>(`${server.PRODUCT_URL}/name/${keyword}`);
    return result.data;
  } else {
    const result = await httpClient.get<Product[]>(server.PRODUCT_URL);
    return result.data;
  }
});

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.stockAllResult = action.payload;
    });

    builder.addCase(getProducts.rejected, (state) => {
      state.stockAllResult = [];
    });
  },
});

export default stockSlice.reducer;
