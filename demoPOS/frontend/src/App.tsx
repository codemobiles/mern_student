import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "@/components/layouts/Header";
import Menu from "@/components/layouts/Menu";
import { Container } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "@/components/pages/LoginPage";
import RegisterPage from "@/components/pages/RegisterPage";
import { useSelector } from "react-redux";
import { authSelector } from "@/store/slices/authSlice";
import StockPage from "@/components/pages/StockPage";
import PublicRoutes from "./router/public.routes";
import ProtectedRoutes from "./router/protected.routes";
import ReportPage from "./components/pages/ReportPage";

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

  React.useEffect(() => {}, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
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
              <Route path="/stock" element={<StockPage />} />
              <Route path="/report" element={<ReportPage />} />
            </Route>
          </Routes>
        </Container>
      </Main>
    </Box>
  );
}
