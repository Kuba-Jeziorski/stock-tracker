import { createTheme } from "@mui/material";

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
    positive: "#16A34A",
    negative: "#DC2626",
    favorite: "#133458",
  },
};

export const theme = createTheme({
  palette: { custom },
});
