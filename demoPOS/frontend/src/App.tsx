import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "@/components/layouts/Header";
import Menu from "@/components/layouts/Menu";
import { Container, createTheme } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "@/components/pages/LoginPage";
import RegisterPage from "@/components/pages/RegisterPage";
import { useSelector } from "react-redux";
import { authSelector, relogin } from "@/store/slices/authSlice";
import StockPage from "@/components/pages/StockPage";
import PublicRoutes from "./router/public.routes";
import ProtectedRoutes from "./router/protected.routes";
import ReportPage from "./components/pages/ReportPage";
import { useAppDispatch } from "./store/store";
import ShopPage from "./components/pages/ShopPage";
import StockCreatePage from "./components/pages/StockCreatePage";
import StockEditPage from "./components/pages/StockEditPage";
import TransactionPage from "./components/pages/TransactionPage";
import { ThemeProvider } from "@emotion/react";
import { blue } from "@mui/material/colors";
import backgroundMenuImage from "@/assets/images/background_menu.jpg";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function App() {
  const [open, setOpen] = React.useState(true);
  const authReducer = useSelector(authSelector);
  const dispatch = useAppDispatch();
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 30,
            borderColor: "#eee",
            borderWidth: 1,
            borderStyle: "solid",
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundImage: `url(${backgroundMenuImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "#f2fcff",
            backgroundPosition: "bottom",
            width: drawerWidth,
          },
        },
      },
    },
    spacing: 8,
    typography: {
      fontFamily: "Chakra Petch",
      // fontFamily: "Roboto",
      fontWeightLight: 100,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
    },
    palette: {
      primary: import.meta.env.VITE_IS_PRODUCTION === "1" ? { main: "#C1272D" } : blue,
      background: {
        default: "#B8F4FF33",
      },
    },
  });

  React.useEffect(() => {
    // Called when component is created
    dispatch(relogin());
  }, [dispatch]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (authReducer.isAuthenticating) {
    return <></>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {authReducer.isAuthented && <Header open={open} handleDrawerOpen={handleDrawerOpen} />}
        {authReducer.isAuthented && <Menu open={open} handleDrawerClose={handleDrawerClose} />}
        <Main open={open}>
          <Container>
            <DrawerHeader />
            <Routes>
              {/** Wrap all Route under PublicRoutes element */}
              <Route path="/" element={<PublicRoutes isAuthented={authReducer.isAuthented} />}>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Route>

              {/** Wrap all Route under ProtectedRoutes element */}
              <Route path="/" element={<ProtectedRoutes isAuthented={authReducer.isAuthented} />}>
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/stock" element={<StockPage />} />
                <Route path="/report" element={<ReportPage />} />
                <Route path="/stock/create" element={<StockCreatePage />} />
                <Route path="/stock/edit/:id" element={<StockEditPage />} />
                <Route path="/report" element={<ReportPage />} />
                <Route path="/transaction" element={<TransactionPage />} />
              </Route>
            </Routes>
          </Container>
        </Main>
      </Box>
    </ThemeProvider>
  );
}
