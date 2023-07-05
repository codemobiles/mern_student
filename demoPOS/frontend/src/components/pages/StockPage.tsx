import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { stockSelector, getProducts } from "@/store/slices/stockSlice";
import { useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "dayjs/locale/th";
import { Typography } from "@mui/material";

const columns: GridColDef[] = [
  { field: "product_id", headerName: "ID", width: 70 },
  { field: "image", headerName: "Image", width: 100 },
  { field: "name", headerName: "Name", width: 500 },
  { field: "stock", headerName: "Stock", width: 130 },
  { field: "price", headerName: "Price", width: 130 },
  {
    field: "created",
    headerName: "Created",
    width: 230,
    renderCell: ({ value }) => {
      return (
        <Typography variant="body1">
          {/* 543 diff thai years */}
          {dayjs(value).locale("th").add(543, "year").format("DD MMMM YYYY")}
        </Typography>
      );
    },
  },
];

export default function StockPage() {
  const dispatch = useAppDispatch();
  const stockReducer = useSelector(stockSelector);

  React.useEffect(() => {
    dispatch(getProducts(""));
  }, [dispatch]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={stockReducer.stockAllResult}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
