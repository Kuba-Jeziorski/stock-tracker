import { memo } from "react";
import { Box, Link as MuiLink, Skeleton, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router";
import type { DetailedStock } from "../../../types/stock";
import { significantFiguresFormatter } from "../../../shared/formatters/significant-figures-formatter";

type Props = {
  stock: DetailedStock;
  isFetching: boolean;
};

const linkSx: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "custom.text.primary",
  borderBottom: 1,
  borderColor: "custom.table.separator",
  backgroundColor: "transparent",
  transition: "color 0.3s, background-color 0.3s",
  "&:hover": {
    backgroundColor: "custom.table.background",
  },
};

const cellSx: SxProps<Theme> = {
  paddingX: 4,
  paddingY: 2,
  width: 1 / 4,
};

const tickerSx: SxProps<Theme> = {
  display: "block",
  width: 1,
  fontWeight: 600,
};

const nameSx: SxProps<Theme> = {
  display: "block",
  width: 1,
};

const priceSx: SxProps<Theme> = {
  display: "block",
  width: 1,
  fontWeight: 600,
};

const changeBaseSx: SxProps<Theme> = {
  display: "block",
  width: 1,
  fontWeight: 600,
};

const getChangeColor = (change: number | null) => (theme: Theme) => {
  if (change == null || change === 0) {
    return theme.palette.custom.text.primary;
  }

  return change > 0
    ? theme.palette.custom.status.positive
    : theme.palette.custom.status.negative;
};

export const StockListItem = memo(({ stock, isFetching }: Props) => {
  return (
    <MuiLink component={RouterLink} to={`/${stock.ticker}`} sx={linkSx}>
      <Box sx={cellSx}>
        {isFetching ? (
          <Skeleton
            variant="rectangular"
            animation="pulse"
            width={210}
            height={24}
          />
        ) : (
          <Typography noWrap sx={tickerSx}>
            {stock.ticker}
          </Typography>
        )}
      </Box>
      <Box sx={cellSx}>
        {isFetching ? (
          <Skeleton
            variant="rectangular"
            animation="pulse"
            width={210}
            height={24}
          />
        ) : (
          <Typography noWrap sx={nameSx}>
            {stock.name}
          </Typography>
        )}
      </Box>
      <Box sx={cellSx}>
        {isFetching ? (
          <Skeleton
            variant="rectangular"
            animation="pulse"
            width={210}
            height={24}
          />
        ) : (
          <Typography noWrap sx={priceSx}>
            {stock.price === null ? "N/A" : `$${stock.price}`}
          </Typography>
        )}
      </Box>
      <Box sx={cellSx}>
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
            sx={[changeBaseSx, { color: getChangeColor(stock.change) }]}
          >
            {stock.change == null
              ? "N/A"
              : `${significantFiguresFormatter(stock.change, 3)}%`}
          </Typography>
        )}
      </Box>
    </MuiLink>
  );
});
