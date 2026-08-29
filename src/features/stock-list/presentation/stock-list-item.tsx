import { memo } from "react";
import { Box, Link as MuiLink, Skeleton, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router";
import type { DetailedStock } from "../../../types/stock";
import { significantFiguresFormatter } from "../../../shared/formatters/significant-figures-formatter";
import { getChangeColor } from "../../../shared/formatters/get-change-color";

type Props = {
  stock: DetailedStock;
  isFetching: boolean;
};

const linkSx = (isDisabled: boolean): SxProps<Theme> => ({
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
  ...(isDisabled && {
    cursor: "no-drop",
    opacity: 1 / 2,
  }),
});

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

export const StockListItem = memo(({ stock, isFetching }: Props) => {
  const isDisabled = stock.price === null && stock.change === null;

  return (
    <MuiLink
      component={RouterLink}
      to={`/${stock.ticker}`}
      onClick={(event) => {
        if (isDisabled) {
          event.preventDefault();
        }
      }}
      sx={linkSx(isDisabled)}
    >
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
