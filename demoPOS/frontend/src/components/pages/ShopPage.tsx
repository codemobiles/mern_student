import waitingForSaleImage from "@/assets/images/waiting_for_sale.png";
import Payment from "@/components/fragments/Payment";
import { addOrder, removeOrder, shopSelector, togglePayment } from "@/store/slices/shopSlice";
import { getProducts, stockSelector } from "@/store/slices/stockSlice";
import { useAppDispatch } from "@/store/store";
import { Product } from "@/types/product.type";
import { imageUrl } from "@/utils/constants";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import StarsIcon from "@mui/icons-material/Stars";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { NumericFormat } from "react-number-format";
import { useSelector } from "react-redux";

const classes = {
  root: {
    width: "100%",
    marginTop: 55,
  },
  star: {
    color: "red",
  },
  orderList: {
    overflowX: "hidden",
    height: 490,
    flex: 1,
    width: "100%",
    maxHeight: 490,
  },
  orderListItem: {
    height: 100,
    maxHeight: 100,
  },
  productContainer: {
    height: 720,
  },
  paymentButton: {
    height: 95,
    marginTop: 24,
  },
  leftLabel: {
    marginLeft: 20,
  },
  rightLabel: {
    marginRight: 20,
  },
};

const Shop = () => {
  const shopReducer = useSelector(shopSelector);
  const stockReducer = useSelector(stockSelector);
  const dispatch = useAppDispatch();
  const renderPayment = () => {
    return (
      <div style={{ maxHeight: 710 }}>
        <Payment order={JSON.stringify(shopReducer.mOrderLines)} />
      </div>
    );
  };

  const isSelectedItem = (product: Product) => {
    const index = shopReducer.mOrderLines.findIndex((item) => {
      return item._id === product._id;
    });
    return index !== -1;
  };

  const getOrderDetail = (id: number) => {
    const index = shopReducer.mOrderLines.findIndex((item) => item.product_id === id);

    return shopReducer.mOrderLines[index];
  };

  const renderOrderRows = () => {
    const { mOrderLines } = shopReducer;

    return mOrderLines.map((item) => (
      <ListItem button divider sx={{ height: 100 }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Image Order  */}
          <img alt="to be done" src={`${imageUrl}/images/${item.image}`} style={{ height: 50, width: 50 }} />

          {/* Name Order  */}
          <Typography color="textSecondary" component="p" sx={{ flexGrow: 1, marginLeft: 1, marginRight: 1 }}>
            {item.name}
          </Typography>

          {/* Price and Qty Order  */}
          <Typography align="right" color="textPrimary">
            <NumericFormat value={item.price} displayType={"text"} thousandSeparator={true} decimalScale={2} fixedDecimalScale={true} prefix={"฿"} />
            <br />X {item.qty}.
            <br />
            <DeleteOutlineIcon onClick={() => dispatch(removeOrder(item))} />
          </Typography>
        </Box>
      </ListItem>
    ));
  };

  const renderProductRows = () => {
    const { stockAllResult } = stockReducer;
    return (
      <Container sx={{ height: "80vh", overflowY: "scroll", padding: 1 }}>
        <Grid container spacing={1} sx={{ pt: 1 }}>
          {stockAllResult !== null &&
            stockAllResult.map((item, i) => (
              <Grid key={i} item xs={3} onClick={() => dispatch(addOrder(item))} style={{ cursor: "pointer" }}>
                <Card elevation={5}>
                  <CardActionArea>
                    <CardMedia component="img" alt="Contemplative Reptile" height={120} image={`${imageUrl}/images/${item.image}`} title="Contemplative Reptile" />
                    <CardContent>
                      <Typography noWrap gutterBottom>
                        {item.name}
                      </Typography>
                      <Grid
                        container
                        sx={{
                          height: 24,
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <div style={{ flexGrow: 1 }}>
                          <Typography variant="body2" color="textSecondary" component="p">
                            D{item.product_id} / ฿{item.price}
                          </Typography>
                        </div>
                        {isSelectedItem(item) && (
                          <div style={{ display: "flex", flexDirection: "row" }}>
                            <Typography style={{ marginRight: 4 }} variant="body1" color="textPrimary">
                              X{getOrderDetail(item.product_id!).qty}
                            </Typography>

                            <StarsIcon sx={classes.star} />
                          </div>
                        )}
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    );
  };

  useEffect(() => {
    dispatch(getProducts(""));
  }, [dispatch]);

  return (
    <Grid container spacing={2} sx={{ height: "80vh", marginTop: 10 }}>
      {/* Left section */}
      <Grid item xs={8} sx={{ overflow: "hidden" }}>
        {shopReducer.mIsPaymentMade ? renderPayment() : renderProductRows()}
      </Grid>

      {/* Right section */}
      <Grid
        item
        xs={4}
        sx={{
          padding: 1,
          height: "83vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Paper sx={{ padding: 1, mt: 1, mb: 1 }} elevation={1}>
          {/* Tax section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Tax 7%</Typography>
            <Typography variant="h6" color="red">
              <NumericFormat value={shopReducer.mTaxAmt} displayType={"text"} decimalScale={2} thousandSeparator={true} prefix={"฿"} />
            </Typography>
          </Box>

          {/* Total section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4">Total</Typography>
            <Typography variant="h4" color="primary">
              <NumericFormat value={shopReducer.mTotalPrice} displayType={"text"} thousandSeparator={true} decimalScale={2} fixedDecimalScale={true} prefix={"฿"} />
            </Typography>
          </Box>

          {shopReducer.mTotalPrice > 0 && (
            <Button fullWidth sx={{ marginBottom: 2, marginTop: 2 }} variant="contained" color="primary" onClick={() => dispatch(togglePayment())}>
              <Typography variant="h4">{shopReducer.mIsPaymentMade ? "Cancel" : "Payment"}</Typography>
            </Button>
          )}
        </Paper>

        <Paper
          elevation={1}
          sx={{
            height: "100%",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {shopReducer.mOrderLines.length > 0 ? (
            <List component="nav" aria-label="mailbox folders">
              {renderOrderRows()}
            </List>
          ) : (
            <img alt="" src={waitingForSaleImage} style={{ height: 300, width: 300 }} />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Shop;
