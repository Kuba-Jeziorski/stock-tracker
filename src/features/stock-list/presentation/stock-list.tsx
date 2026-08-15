import { Box, Stack, Typography } from "@mui/material";
import type { Stock } from "../domain/models";

type Props = {
  stocksPerPage: Stock[];
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
                Price
              </Typography>
              <Typography
                sx={{ display: "flex", width: 1, paddingX: 4, paddingY: 2 }}
              >
                Change %
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
};
