import {
  Box,
  Typography,
  Link as MuiLink,
  Skeleton,
  Stack,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Link as RouterLink } from "react-router";
import type { SyntheticEvent } from "react";
import type { SxProps, Theme } from "@mui/material/styles";
import { getChangeColor } from "../../../shared/formatters/get-change-color";
import { significantFiguresFormatter } from "../../../shared/formatters/significant-figures-formatter";
import type { StockTicker } from "../../../types/stock";
import { getStockByTicker } from "../../overview-bar/core/get-stock-by-ticker";
import { useQuote } from "../../../libs/utils/integration/quote/use-quote";
import { getStockLogoUrl } from "../core/get-stock-logo-url";

type Props = {
  ticker: StockTicker;
};

const linkSx: SxProps<Theme> = {
  display: "flex",
  textDecoration: "none",
  flexDirection: "column",
  gap: 1,
  p: 2,
  color: "custom.text.primary",
  border: 1,
  borderColor: "custom.table.separator",
  borderRadius: 4,
  aspectRatio: 1,
  backgroundColor: "custom.background.light",
  transition: "color 0.3s, background-color 0.3s",
  "&:hover": {
    backgroundColor: "custom.table.background",
  },
};

const headerRowSx: SxProps<Theme> = {
  alignItems: "start",
  gap: 1,
};

const nameBoxSx: SxProps<Theme> = {
  flex: 1,
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
  mt: "auto",
  width: 1,
  fontWeight: 600,
};

const changeBaseSx: SxProps<Theme> = {
  display: "block",
  width: 1,
  fontWeight: 600,
};

const starSx: SxProps<Theme> = {
  width: 24,
  fontSize: 24,
  color: "custom.status.favorite",
};

const changeSkeletonSx: SxProps<Theme> = {
  borderRadius: 4,
};

const priceSkeletonSx: SxProps<Theme> = {
  borderRadius: 4,
  mt: "auto",
};

const hideBrokenLogo = (event: SyntheticEvent<HTMLImageElement>) => {
  event.currentTarget.style.display = "none";
};

export const WatchlistItem = ({ ticker }: Props) => {
  const currentStock = getStockByTicker(ticker);
  const {
    quote,
    isFetching: isQuoteFetching,
    error: quoteError,
  } = useQuote(ticker);

  if (!currentStock) {
    return <Typography>There was an error</Typography>;
  }

  const isQuoteLoading = isQuoteFetching && !quote;
  const priceLabel =
    quoteError || quote?.price == null ? "N/A" : `$${quote.price}`;
  const changeLabel =
    quoteError || quote?.change == null
      ? "N/A"
      : `${significantFiguresFormatter(quote.change, 3)}%`;

  return (
    <MuiLink component={RouterLink} to={`/${ticker}`} sx={linkSx}>
      <Stack direction="row" sx={headerRowSx}>
        <Box sx={nameBoxSx}>
          <Typography sx={tickerSx}>{ticker}</Typography>
          <Typography sx={nameSx}>{currentStock.name}</Typography>
        </Box>
        <StarIcon sx={starSx} />
      </Stack>
      {isQuoteLoading ? (
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width="100%"
          height={24}
          sx={priceSkeletonSx}
        />
      ) : (
        <Typography noWrap sx={priceSx}>
          {priceLabel}
        </Typography>
      )}
      {isQuoteLoading ? (
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width="100%"
          height={24}
          sx={changeSkeletonSx}
        />
      ) : (
        <Typography
          noWrap
          sx={[changeBaseSx, { color: getChangeColor(quote?.change ?? null) }]}
        >
          {changeLabel}
        </Typography>
      )}
      <img
        src={getStockLogoUrl(ticker)}
        alt={`${currentStock.name} logo`}
        width={32}
        height={32}
        loading="lazy"
        decoding="async"
        onError={hideBrokenLogo}
      />
    </MuiLink>
  );
};
