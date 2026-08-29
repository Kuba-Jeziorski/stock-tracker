import { Container, Skeleton, Stack, Typography } from "@mui/material";
import { useParams } from "react-router";
import { getStockByTicker } from "../features/overview-bar/core/get-stock-by-ticker";
import { OverviewBarContainer } from "../features/overview-bar/presentation/overview-bar-container";
import { useQuote } from "../libs/utils/integration/quote/use-quote";
import { useStat } from "../libs/utils/integration/stat/use-stat";
import { useTabTitle } from "../libs/utils/use-tab-title";
import type { DetailedStock, StockStatistics } from "../types/stock";
import type { Detail } from "../features/overview-bar/domain/model";
import { useNews } from "../features/detail-box/integration/use-news";
import { DetailBoxContainer } from "../features/detail-box/presentation/detail-box-container";
import { marketCapitalizationFormatter } from "../shared/formatters/market-capitalization-formatter";
import { significantFiguresFormatter } from "../shared/formatters/significant-figures-formatter";

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

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ display: "flex", flexDirection: "column", gap: 4 }}
    >
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
    </Container>
  );
};
