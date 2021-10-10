import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: red[900],
    },
    secondary: {
      main: "#E7261C",
    },
    mode: "dark",
  },
});

export default theme;
