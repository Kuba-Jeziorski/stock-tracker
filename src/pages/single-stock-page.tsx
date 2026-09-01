import {
  Box,
  Button,
  Container,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useParams } from "react-router";
import { getStockByTicker } from "../features/overview-bar/core/get-stock-by-ticker";
import { OverviewBarContainer } from "../features/overview-bar/presentation/overview-bar-container";
import { useQuote } from "../libs/utils/integration/quote/use-quote";
import { useStat } from "../libs/utils/integration/stat/use-stat";
import { useTabTitle } from "../libs/utils/use-tab-title";
import type {
  DetailedStock,
  StockStatistics,
  StockTicker,
} from "../types/stock";
import type { Detail } from "../features/overview-bar/domain/model";
import { useNews } from "../features/detail-box/integration/use-news";
import { DetailBoxContainer } from "../features/detail-box/presentation/detail-box-container";
import { marketCapitalizationFormatter } from "../shared/formatters/market-capitalization-formatter";
import { significantFiguresFormatter } from "../shared/formatters/significant-figures-formatter";
import { useState } from "react";
import type { SxProps } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const wishlistButtonSx = (isWishlisted: boolean): SxProps<Theme> => ({
  textDecoration: "none",
  color: isWishlisted ? "custom.text.navy" : "custom.text.secondary",
  backgroundColor: isWishlisted
    ? "custom.background.light"
    : "custom.background.navy",
  textTransform: "capitalize",
  display: "flex",
  alignItems: "center",
  gap: 2,
  border: 1,
  borderColor: "custom.background.navy",
  borderRadius: 8,
  paddingX: 2,
  paddingY: 2,
  transition: "color 0.3s, background-color 0.3s",
  "&:hover": {
    color: isWishlisted ? "custom.text.secondary" : "custom.background.navy",
    backgroundColor: isWishlisted
      ? "custom.background.navy"
      : "custom.background.light",
  },
});

export const SingleStockPage = () => {
  const { stockTicker } = useParams();
  const stock = getStockByTicker(stockTicker);
  const {
    quote,
    error: quoteError,
    isFetching: isQuoteFetching,
  } = useQuote(stock?.ticker ?? "");
  const {
    stat,
    error: statError,
    isFetching: isStatFetching,
  } = useStat(stock?.ticker ?? "");
  const {
    isFetching: isNewsFetching,
    news,
    error: newsError,
  } = useNews(stock?.ticker ?? "");

  useTabTitle(
    stock
      ? `Single stock - ${stock.ticker}`
      : "Single stock - not a valid ticker",
  );

  const [localStorageItems, setLocalStorageItems] = useState<StockTicker[]>(
    () => {
      const item = localStorage.getItem("wishlist");
      return item ? JSON.parse(item) : [];
    },
  );

  if (!stock) {
    return <h1>Not a valid ticker</h1>;
  }

  if (quoteError || statError || newsError) {
    return <Typography>There was an error</Typography>;
  }

  const isInitialLoading =
    (isQuoteFetching && !quote) ||
    (isStatFetching && !stat) ||
    (isNewsFetching && !news);

  if (isInitialLoading) {
    return (
      <Container maxWidth={false} disableGutters>
        <Stack spacing={2} sx={{ padding: 2 }}>
          <Skeleton variant="rectangular" height={88} />
          <Skeleton variant="rectangular" height={72} />
        </Stack>
      </Container>
    );
  }

  const isWishlisted = localStorageItems.includes(stock.ticker);

  const handleWishlist = (ticker: StockTicker) => {
    const isWishlisted = localStorageItems.includes(ticker);

    const updatedArray = isWishlisted
      ? localStorageItems.filter((item) => item !== ticker)
      : [...localStorageItems, ticker];

    localStorage.setItem("wishlist", JSON.stringify(updatedArray));
    setLocalStorageItems(updatedArray);
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Box
        sx={{
          width: 1,
          display: "flex",
          justifyContent: "flex-end",
          p: 0,
          m: 0,
        }}
      >
        <Button
          variant="contained"
          sx={wishlistButtonSx(isWishlisted)}
          onClick={() => handleWishlist(stock.ticker)}
        >
          {isWishlisted ? <StarIcon /> : <StarBorderIcon />}
          <Typography>
            {isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          </Typography>
        </Button>
      </Box>
      <Stack direction="column" sx={{ gap: 4 }}>
        <OverviewBarContainer
          data={{
            ...stock,
            price: quote?.price ?? null,
            change: quote?.change ?? null,
          }}
          mapToDetails={(stock: DetailedStock): Detail[] => [
            {
              kind: "text",
              label: "Ticker",
              value: stock.ticker,
            },
            {
              kind: "text",
              label: "Company",
              value: stock.name,
            },
            {
              kind: "price",
              label: "Price",
              value: stock.price,
            },
            {
              kind: "change",
              label: "Change",
              value: significantFiguresFormatter(stock.change ?? 0, 3),
            },
          ]}
          // mapToDetails={getStockPriceQuote}
          variant="large"
        />
        <OverviewBarContainer
          data={{
            ...stock,
            country: stat?.country ?? null,
            ipo: stat?.ipo ?? null,
            marketCapitalization: stat?.marketCapitalization ?? null,
          }}
          mapToDetails={(stock: StockStatistics): Detail[] => [
            {
              kind: "text",
              label: "Country",
              value: stock.country,
            },
            {
              kind: "text",
              label: "Ipo",
              value: stock.ipo,
            },
            {
              kind: "price",
              label: "Market Capitalization",
              value: marketCapitalizationFormatter(
                stock.marketCapitalization ?? 0,
              ),
            },
            {
              kind: "text",
              label: "Industry",
              value: stock.sector,
            },
          ]}
          variant="standard"
        />
        <DetailBoxContainer news={news ?? []} />
      </Stack>
    </Container>
  );
};
