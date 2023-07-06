import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ChartType } from "chart.js";

// const [chartType, setChartType] = useState<ChartType>("line");
// const [chartData1, setChartData1] = useState([]);
// const [chartData2, setChartData2] = useState([]);

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

const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {},
});

export default reportSlice.reducer;
export const {} = reportSlice.actions;
export const reportSelector = (state: RootState) => state.reportReducer;
