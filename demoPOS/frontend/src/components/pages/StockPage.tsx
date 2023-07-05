import { deleteProduct, getProducts, stockSelector } from "@/store/slices/stockSlice";
import { useAppDispatch } from "@/store/store";
import { Product } from "@/types/product.type";
import { imageUrl } from "@/utils/constants";
import { Clear, CopyAll } from "@mui/icons-material";
import Add from "@mui/icons-material/Add";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import AssignmentReturn from "@mui/icons-material/AssignmentReturn";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import NewReleases from "@mui/icons-material/NewReleases";
import Search from "@mui/icons-material/Search";
import Star from "@mui/icons-material/Star";
import { Box, Fab, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useDebounce } from "@react-hook/debounce";
import dayjs from "dayjs";
import "dayjs/locale/th";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import StockCard from "@/components/fragments/StockCard";

interface QuickSearchToolbarProps {
  clearSearch: () => void;
  onChange: () => void;
  value: string;
}

function QuickSearchToolbar(props: QuickSearchToolbarProps) {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search…"
        InputProps={{
          startAdornment: <Search fontSize="small" />,
          endAdornment: (
            <IconButton title="Clear" aria-label="Clear" size="small" style={{ visibility: props.value ? "visible" : "hidden" }} onClick={props.clearSearch}>
              <Clear fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: {
            xs: 1,
            sm: "auto",
          },
          m: (theme) => theme.spacing(1, 0.5, 1.5),
          "& .MuiSvgIcon-root": {
            mr: 0.5,
          },
          "& .MuiInput-underline:before": {
            borderBottom: 1,
            borderColor: "divider",
          },
        }}
      />

      <Link to="/stock/create">
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <Add />
        </Fab>
      </Link>
    </Box>
  );
}

const Stock = () => {
  const [isCopied, handleCopy] = useCopyToClipboard(500);
  const stockReducer = useSelector(stockSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [value, setValue] = useDebounce("", 1000);
  // const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(getProducts(value));
  }, [dispatch, value]);

  useEffect(() => {
    dispatch(getProducts(""));
  }, [dispatch]);

  const stockColumns: GridColDef[] = [
    {
      headerName: "ID",
      field: "product_id",
      width: 50,
    },
    {
      headerName: "IMG",
      field: "image",
      width: 80,
      renderCell: ({ value }: GridRenderCellParams) => (
        <img alt="" src={`${imageUrl}/images/${value}?dummy=${Math.random()}`} style={{ width: 70, height: 70, borderRadius: "5%" }} />
      ),
    },
    {
      headerName: "NAME",
      field: "name",
      width: 400,
    },
    {
      headerName: "STOCK",
      width: 120,
      field: "stock",
      renderCell: ({ value }: GridRenderCellParams) => (
        <Typography variant="body1">
          <NumericFormat value={value} displayType={"text"} thousandSeparator={true} decimalScale={0} fixedDecimalScale={true} />
        </Typography>
      ),
    },
    {
      headerName: "PRICE",
      field: "price",
      width: 120,
      renderCell: ({ value }: GridRenderCellParams) => (
        <Typography variant="body1">
          <NumericFormat value={value} displayType={"text"} thousandSeparator={true} decimalScale={2} fixedDecimalScale={true} prefix={"฿"} />
        </Typography>
      ),
    },
    {
      headerName: "TIME",
      field: "created",
      width: 120,
      renderCell: ({ value }: GridRenderCellParams) => (
        <Typography variant="body1">
          {/* 543 diff thai years */}
          {dayjs(value).locale("th").add(543, "year").format("DD MMMM YYYY")}
        </Typography>
      ),
    },
    {
      headerName: "ACTION",
      field: ".",
      width: 220,
      renderCell: ({ row }) => (
        <Stack direction="row">
          <IconButton
            aria-label="edit"
            size="large"
            onClick={() => {
              navigate("/stock/edit/" + row.product_id);
            }}
          >
            <Edit fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => {
              setSelectedProduct(row);
              setOpenDialog(true);
            }}
          >
            <Delete fontSize="inherit" />
          </IconButton>
          <IconButton
            disabled={isCopied && selectedProduct?.product_id === row.product_id}
            aria-label="copy"
            size="large"
            onClick={() => {
              setSelectedProduct(row);
              handleCopy((row as Product).name);
            }}
          >
            <CopyAll fontSize="inherit" />
          </IconButton>
        </Stack>
      ),
    },
  ];

  const handleDeleteConfirm = async () => {
    if (selectedProduct && selectedProduct.product_id) {
      const result = await dispatch(deleteProduct(selectedProduct.product_id.toString()));
      if (deleteProduct.fulfilled.match(result)) {
        dispatch(getProducts(""));
      }
      setOpenDialog(false);
    }
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const showDialog = () => {
    if (selectedProduct === null) {
      return "";
    }

    return (
      <Dialog open={openDialog} keepMounted aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
        <DialogTitle id="alert-dialog-slide-title">
          <img alt="" src={`${imageUrl}/images/${selectedProduct?.image}?dummy=${Math.random()}`} style={{ width: 100, borderRadius: "5%" }} />
          <br />
          Confirm to delete the product? : {" " + selectedProduct?.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">You cannot restore deleted product.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="info">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Box>
      {/* Summary Icons */}
      <Grid container sx={{ marginBottom: 3 }} spacing={7}>
        <Grid item xs={12} lg={3} md={6}>
          <StockCard icon={AddShoppingCart} title="TOTAL" subtitle="112 THB" color="#00a65a" />
        </Grid>

        <Grid item xs={12} lg={3} md={6}>
          <StockCard icon={NewReleases} title="EMPTY" subtitle="9 PCS." color="#f39c12" />
        </Grid>

        <Grid item xs={12} lg={3} md={6}>
          <StockCard icon={AssignmentReturn} title="RETURN" subtitle="1 PCS." color="#dd4b39" />
        </Grid>

        <Grid item xs={12} lg={3} md={6}>
          <StockCard icon={Star} title="LOSS" subtitle="5 PCS." color="#00c0ef" />
        </Grid>
      </Grid>

      <DataGrid
        components={{ Toolbar: QuickSearchToolbar }}
        sx={{
          backgroundColor: "white",
          height: "70vh",
          "& .MuiDataGrid-cell:focus": { outline: "solid #2196f3 0px" },
        }}
        getRowId={(row) => row.product_id}
        rows={stockReducer.stockAllResult}
        columns={stockColumns}
        componentsProps={{
          toolbar: {
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
            clearSearch: () => setValue(""),
          },
        }}
      />
      {showDialog()}
    </Box>
  );
};

export default Stock;
