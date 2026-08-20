import { Container, Typography } from "@mui/material";
import { useParams } from "react-router";
import { getStockByTicker } from "../features/overview-bar/core/get-stock-by-ticker";
import { getStockKeyStatistics } from "../features/overview-bar/core/get-stock-key-statistics";
import { getStockPriceQuote } from "../features/overview-bar/core/get-stock-price-quote";
import { useQuote } from "../features/overview-bar/integration/use-quote";
import { OverviewBarContainer } from "../features/overview-bar/presentation/overview-bar-container";
import { useTabTitle } from "../libs/utils/use-tab-title";
import { useStat } from "../features/overview-bar/integration/use-stat";

export const SingleStockPage = () => {
  const { stockTicker } = useParams();
  const stock = getStockByTicker(stockTicker);
  const { quote, error: quoteError } = useQuote(stock?.ticker ?? "");
  const { stat, error: statError } = useStat(stock?.ticker ?? "");

  useTabTitle(
    stock
      ? `Single stock - ${stock.ticker}`
      : "Single stock - not a valid ticker",
  );

  if (!stock || !stat) {
    return <h1>Not a valid ticker</h1>;
  }

  if (quoteError || statError) {
    return <Typography>There was an error</Typography>;
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
        mapToDetails={getStockPriceQuote}
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
        mapToDetails={getStockKeyStatistics}
        variant="standard"
      />
    </Container>
  );
};
