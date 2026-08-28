import { Container, Skeleton, Stack, Typography } from "@mui/material";
import { useParams } from "react-router";
import { getStockByTicker } from "../features/overview-bar/core/get-stock-by-ticker";
import { useQuote } from "../features/overview-bar/integration/use-quote";
import { OverviewBarContainer } from "../features/overview-bar/presentation/overview-bar-container";
import { useTabTitle } from "../libs/utils/use-tab-title";
import { useStat } from "../features/overview-bar/integration/use-stat";
import type { DetailedStock, StockStatistics } from "../types/stock";
import type { Detail } from "../features/overview-bar/domain/model";

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

  useTabTitle(
    stock
      ? `Single stock - ${stock.ticker}`
      : "Single stock - not a valid ticker",
  );

  if (!stock) {
    return <h1>Not a valid ticker</h1>;
  }

  if (quoteError || statError) {
    return <Typography>There was an error</Typography>;
  }

  const isInitialLoading =
    (isQuoteFetching && !quote) || (isStatFetching && !stat);

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
    <Container maxWidth={false} disableGutters>
      <OverviewBarContainer
        // type T needs to be provided so it can be used in the mapper function
        data={{
          ...stock,
          price: quote?.price ?? null,
          change: quote?.change ?? null,
        }}
        // mapper function that is taking argument of the type T
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
            value: stock.change,
          },
        ]}
        // mapToDetails={getStockPriceQuote}
        variant="large"
      />
      Chart
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
            value: stock.marketCapitalization,
          },
          {
            kind: "text",
            label: "Industry",
            value: stock.sector,
          },
        ]}
        variant="standard"
      />
    </Container>
  );
};
