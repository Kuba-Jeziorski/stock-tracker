import { Box } from "@mui/material";
import { StockList } from "./stock-list";
import { StockSelected } from "./stock-selected";

export const StockContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        minHeight: 0,
        justifyContent: "space-between",
        gap: 8,
      }}
    >
      <StockList />
      <StockSelected />
    </Box>
  );
};
