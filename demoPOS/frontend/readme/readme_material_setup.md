# setup mui

- https://mui.com/material-ui/getting-started/installation/
- yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material
- Add theme and ThemeProvider (HOC) at App.tsx

# custom theme

```ts
// https://mui.com/customization/default-theme/
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
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
    // fontFamily: "Chakra Petch",
    fontFamily: "Roboto",
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  palette: {
    primary: import.meta.env.VITE_IS_PRODUCTION === "1" ? { main: "#C1272D" } : blue,
    background: {
      default: "#EEE",
    },
  },
});
```
