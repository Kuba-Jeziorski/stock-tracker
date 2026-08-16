import { Box, Skeleton, Stack, Typography } from "@mui/material";
import type { DetailedStock } from "../domain/models";

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
              <Box
                sx={{
                  paddingX: 4,
                  paddingY: 2,
                  width: 1,
                }}
              >
                {isFetching ? (
                  <Skeleton
                    variant="rectangular"
                    animation="pulse"
                    width={210}
                    height={24}
                  />
                ) : (
                  <Typography
                    sx={{
                      display: "flex",
                      width: 1,
                      fontWeight: 600,
                    }}
                  >
                    {stock.ticker}
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  paddingX: 4,
                  paddingY: 2,
                  width: 1,
                }}
              >
                {isFetching ? (
                  <Skeleton
                    variant="rectangular"
                    animation="pulse"
                    width={210}
                    height={24}
                  />
                ) : (
                  <Typography
                    sx={{
                      display: "flex",
                      width: 1,
                    }}
                  >
                    {stock.name}
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  paddingX: 4,
                  paddingY: 2,
                  width: 1,
                }}
              >
                {isFetching ? (
                  <Skeleton
                    variant="rectangular"
                    animation="pulse"
                    width={210}
                    height={24}
                  />
                ) : (
                  <Typography
                    sx={{
                      display: "flex",
                      width: 1,
                      fontWeight: 600,
                    }}
                  >
                    {stock.price === null ? "N/A" : `$${stock.price}`}
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  paddingX: 4,
                  paddingY: 2,
                  width: 1,
                }}
              >
                {isFetching ? (
                  <Skeleton
                    variant="rectangular"
                    animation="pulse"
                    width={210}
                    height={24}
                  />
                ) : (
                  <Typography
                    sx={{
                      display: "flex",
                      width: 1,
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
                    {stock.change == null ? "N/A" : `${stock.change}%`}
                  </Typography>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
};
