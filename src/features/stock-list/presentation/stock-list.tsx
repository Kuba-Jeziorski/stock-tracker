import { Box, Stack, Typography } from "@mui/material";
import type { DetailedStock } from "../domain/models";
import { StockListItem } from "./stock-list-item";

type Props = {
  stocksPerPage: DetailedStock[];
  isFetching: boolean;
};

export const StockList = ({ stocksPerPage, isFetching }: Props) => {
  return (
    <Stack
      direction="column"
      spacing={4}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        border: 1,
        borderColor: "custom.table.background",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "custom.table.background",
          borderBottom: 1,
          borderColor: "custom.table.separator",
        }}
      >
        <Typography
          sx={{ display: "flex", width: 1, paddingX: 4, paddingY: 2 }}
        >
          Ticker
        </Typography>
        <Typography
          sx={{ display: "flex", width: 1, paddingX: 4, paddingY: 2 }}
        >
          Company
        </Typography>
        <Typography
          sx={{ display: "flex", width: 1, paddingX: 4, paddingY: 2 }}
        >
          Price
        </Typography>
        <Typography
          sx={{ display: "flex", width: 1, paddingX: 4, paddingY: 2 }}
        >
          Change
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "0 !important",
        }}
      >
        {stocksPerPage.map((stock) => (
          <StockListItem
            key={stock.name}
            stock={stock}
            isFetching={isFetching}
          />
        ))}
      </Box>
    </Stack>
  );
};
