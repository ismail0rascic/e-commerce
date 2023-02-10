import { createTheme } from "@material-ui/core/styles";
const theme = createTheme({
  typography: { useNextVariants: true },
  palette: {
    primary: {
      light: "#5c67a3",
      main: "#FF4500	",
      dark: "#2e355b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#FF4500",
      main: "#ff4081",
      dark: "#c60055",
      contrastText: "#fff",
    },
    openTitle: "orange",
    protectedTitle: "#396",
    type: "light",
  },
});
export default theme;
