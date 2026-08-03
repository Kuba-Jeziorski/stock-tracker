import { Box, Typography } from "@mui/material";
import { facade } from "../../handlers/facade";
import { useObservable } from "../../handlers/use-observable";

export const StockSelected = () => {
  const selectedStock =
    useObservable(facade.getSelectedStock) ?? "No record is selected";

  return (
    <Box sx={{ flex: 1, border: 1 }}>
      <Typography>{selectedStock}</Typography>
    </Box>
  );
};
