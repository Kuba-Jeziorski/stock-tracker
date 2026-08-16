import { Box, Stack, Typography } from "@mui/material";
import type { DetailedStock } from "../domain/models";

type Props = {
  stocksPerPage: DetailedStock[];
};

export const StockList = ({ stocksPerPage }: Props) => {
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
        {stocksPerPage.map((stock) => {
          // const formattedChange = stock.change ?? null;
          console.log(stock.change);

          return (
            <Box
              key={stock.ticker}
              sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: 1,
                borderColor: "custom.table.separator",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  width: 1,
                  paddingX: 4,
                  paddingY: 2,
                  fontWeight: 600,
                }}
              >
                {stock.ticker}
              </Typography>
              <Typography
                sx={{ display: "flex", width: 1, paddingX: 4, paddingY: 2 }}
              >
                {stock.name}
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  width: 1,
                  paddingX: 4,
                  paddingY: 2,
                  fontWeight: 600,
                }}
              >
                {stock.price ? `${stock.price}$` : "N/A"}
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  width: 1,
                  paddingX: 4,
                  paddingY: 2,
                  fontWeight: 600,
                  color: (theme) => {
                    if (stock.change == null || stock.change === 0) {
                      return theme.palette.custom.text.primary;
                    }

                    return stock.change > 0
                      ? theme.palette.custom.status.positive
                      : theme.palette.custom.status.negative;
                  },
                }}
              >
                {stock.change == null
                  ? "N/A"
                  : stock.change === 0
                    ? stock.change
                    : `${stock.change}%`}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
};
