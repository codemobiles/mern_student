import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LayersIcon from "@mui/icons-material/Layers";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ShopIcon from "@mui/icons-material/Shop";
import { Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles";
import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import menuBanner from "@/assets/images/menu_banner.png";
import cmLogo from "@/assets/images/cm_logo.png";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const MyNavLink = React.forwardRef<any, any>((props, ref) => (
  <NavLink ref={ref} to={props.to} className={({ isActive }) => `${props.className} ${isActive ? props.activeClassName : ""}`}>
    {props.children}
  </NavLink>
));

type MenuProps = {
  open: boolean;
  handleDrawerClose: () => void;
};

const Menu: React.FC<MenuProps> = ({ handleDrawerClose, open }) => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader sx={{ backgroundColor: "#2296f3" }}>
        <Stack direction="row" alignItems="center">
          <img alt="" src={cmLogo} style={{ height: 30 }} />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon sx={{ color: "white" }} /> : <ChevronLeftIcon sx={{ color: "white" }} />}
          </IconButton>
        </Stack>
      </DrawerHeader>

      {open && <img alt="" height={250} src={menuBanner} />}
      <Divider />
      <List>
        {/* Shop */}
        <ListItem component={MyNavLink} to="/shop" key="shop" activeClassName="Mui-selected" exact>
          <ListItemIcon>
            <ShopIcon />
          </ListItemIcon>
          <ListItemText primary="Shop" />
        </ListItem>

        {/* Stock */}
        <ListItem component={MyNavLink} to="/stock" key="stock" className={location.pathname.indexOf("/stock") != -1 ? "Mui-selected" : ""} exact>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Stock" />
        </ListItem>

        {/* Report */}
        <ListItem component={MyNavLink} to="/report" button key="report" activeClassName="Mui-selected" exact>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Report" />
        </ListItem>

        {/* Transaction */}
        <ListItem component={MyNavLink} to="/transaction" button key="transaction" activeClassName="Mui-selected" exact>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Transaction" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
