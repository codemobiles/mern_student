import { getTransactions, shopSelector } from "@/store/slices/shopSlice";
import { useAppDispatch } from "@/store/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "transaction_id", headerName: "ID", width: 70 },
  { field: "total", headerName: "Total", width: 130 },
  { field: "paid", headerName: "Paid", width: 130 },
  { field: "change", headerName: "Change", width: 130 },
  { field: "timestamp", headerName: "Timestamp", width: 130 },
];

export default function TransactionPage() {
  const shopReducer = useSelector(shopSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row.transaction_id}
        rows={shopReducer.transactionAllResult}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
