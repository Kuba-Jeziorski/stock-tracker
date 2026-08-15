import { createTheme } from "@mui/material";

// should be moved (where?)
const custom = {
  text: {
    primary: "#000000",
    secondary: "#ffffff",
    navy: " #133458",
  },
  background: {
    default: "#f6f6f9",
    dark: "#000000",
    light: "#ffffff",
    navy: "#133458",
  },
  table: {
    background: "#eef1f6",
    separator: "#dee2e6",
  },
  button: {
    disabledText: "#f6f7f9",
  },
  brand: {
    navy: "#133458",
  },
  status: {
    positive: "#f6f7f9",
    negative: "#f6f7f9",
  },
};

// should be moved (where?)
export const theme = createTheme({
  palette: { custom },
});
