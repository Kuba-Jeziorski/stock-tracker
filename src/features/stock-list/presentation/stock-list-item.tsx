import { Box, Link as MuiLink, Skeleton, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import type { DetailedStock } from "../../../types/stock";

type Props = {
  stock: DetailedStock;
  isFetching: boolean;
};

export const StockListItem = ({ stock, isFetching }: Props) => {
  return (
    <MuiLink
      key={stock.ticker}
      component={RouterLink}
      to={`/${stock.ticker}`}
      sx={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        color: "custom.text.primary",
        borderBottom: 1,
        borderColor: "custom.table.separator",
        backgroundColor: "transparent",
        transition: "all 0.3s",
        "&:hover": {
          backgroundColor: "custom.table.background",
        },
      }}
    >
      <Box
        sx={{
          paddingX: 4,
          paddingY: 2,
          width: 1 / 4,
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
            noWrap
            sx={{
              display: "block",
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
          width: 1 / 4,
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
            noWrap
            sx={{
              display: "block",
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
          width: 1 / 4,
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
            noWrap
            sx={{
              display: "block",
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
          width: 1 / 4,
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
            noWrap
            sx={{
              display: "block",
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
    </MuiLink>
  );
};
