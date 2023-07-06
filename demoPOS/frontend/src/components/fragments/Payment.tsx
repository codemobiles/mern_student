import { TransactionRequest } from "@/types/transaction.type";
import { useSelector } from "react-redux";

import { shopSelector, submitPayment } from "@/store/slices/shopSlice";
import { useAppDispatch } from "@/store/store";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import React from "react";

const Payment = (props: any) => {
  const shopReducer = useSelector(shopSelector);
  const dispatch = useAppDispatch();
  const [given, setGiven] = React.useState(0);

  const isMustChanged = () => {
    try {
      return given > shopReducer.mTotalPrice;
    } catch (err) {
      return false;
    }
  };

  const onClickSubmit = () => {
    const trans: TransactionRequest = {
      subtotal: 0,
      discount: 0,
      shipping_cost: 0,
      tax_percent: 0,
      total: shopReducer.mTotalPrice,
      paid: given,
      change: shopReducer.mTotalPrice - given,
      order_list: props.order,
      payment_type: "cash",
      payment_detail: "full",
      staff_id: "x",
      seller_id: "sr0001",
      buyer_id: "by0000",
      comment: "x",
    };

    dispatch(submitPayment(trans));
  };

  const showForm = () => {
    return (
      <>
        <Stack direction="row">
          <TextField
            variant="outlined"
            margin="normal"
            value={given}
            required
            fullWidth
            sx={{ "& .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input": { color: "green" } }}
            label="Given"
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              style: { fontSize: 35, marginBottom: 20 },
              readOnly: true,
              startAdornment: <InputAdornment position="start">THB</InputAdornment>,
            }}
          />
          {isMustChanged() && (
            <TextField
              variant="filled"
              margin="normal"
              required
              value={given - shopReducer.mTotalPrice}
              fullWidth
              label="Change"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                style: { fontSize: 35, marginBottom: 20 },
                readOnly: true,
                startAdornment: <InputAdornment position="start">THB</InputAdornment>,
              }}
            />
          )}
        </Stack>

        <div style={{ marginTop: 32 }}>
          <Grid container spacing={1} p={1}>
            <Grid item xs>
              <Button sx={{ height: 100, fontSize: 20 }} fullWidth variant="contained" color="primary" onClick={() => setGiven(given + 1000)}>
                ฿1,000
              </Button>
            </Grid>
            <Grid item xs>
              <Button sx={{ height: 100, fontSize: 20 }} fullWidth variant="contained" color="primary" onClick={() => setGiven(given + 500)}>
                ฿500
              </Button>
            </Grid>
            <Grid item xs>
              <Button sx={{ height: 100, fontSize: 20 }} fullWidth variant="contained" color="primary" onClick={() => setGiven(given + 100)}>
                ฿100
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={1} p={1}>
            <Grid item xs>
              <Button sx={{ height: 100, fontSize: 20 }} fullWidth variant="contained" color="primary" onClick={() => setGiven(given + 50)}>
                ฿50
              </Button>
            </Grid>
            <Grid item xs>
              <Button sx={{ height: 100, fontSize: 20 }} fullWidth variant="contained" color="primary" onClick={() => setGiven(given + 20)}>
                ฿20
              </Button>
            </Grid>
            <Grid item xs>
              <Button sx={{ height: 100, fontSize: 20 }} fullWidth variant="contained" color="primary" onClick={() => setGiven(given + 10)}>
                ฿10
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={1} p={1}>
            <Grid item xs>
              <Button sx={{ height: 100, fontSize: 20, padding: 1 }} fullWidth variant="contained" color="info" onClick={() => setGiven(0)}>
                CLR
              </Button>
            </Grid>
            <Grid item xs>
              <Button sx={{ height: 100, fontSize: 20 }} fullWidth variant="contained" color="secondary" onClick={() => setGiven(shopReducer.mTotalPrice)}>
                EXACT
              </Button>
            </Grid>
            <Grid item xs>
              <Button sx={{ height: 100, fontSize: 20 }} fullWidth disabled={given < shopReducer.mTotalPrice} variant="outlined" color="primary" onClick={() => onClickSubmit()}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </>
    );
  };

  return <Box p={2}>{showForm()}</Box>;
};

export default Payment;
