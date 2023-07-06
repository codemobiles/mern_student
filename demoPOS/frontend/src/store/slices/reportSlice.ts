import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ChartType } from "chart.js";

type StateProps = {
  chartType: ChartType;
  chartData1: any[];
  chartData2: any[];
};

const initialState: StateProps = {
  chartType: "line",
  chartData1: [],
  chartData2: [],
};

export function getRandomInt(): any {
  const randoms = [];
  for (let index = 0; index < 8; index++) {
    randoms.push(Math.floor(Math.random() * (50000 - 5 + 1)) + 5);
  }
  return randoms;
}

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    setChartData1: (state, action) => {
      state.chartData1 = action.payload;
    },
    setChartData2: (state, action) => {
      state.chartData2 = action.payload;
    },
    setChartType: (state, action) => {
      state.chartType = action.payload;
    },
  },
});

export default reportSlice.reducer;
export const { setChartData1, setChartData2, setChartType } = reportSlice.actions;
export const reportSelector = (state: RootState) => state.reportReducer;
