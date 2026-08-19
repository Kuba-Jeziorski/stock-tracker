import { Typography } from "@mui/material";
import type { Stock } from "../../../types/stock";
import { getStockPriceQuote } from "../core/get-stock-price-quote";
import { useQuote } from "../integration/use-quote";
import { OverviewBar } from "./overview-bar";

type Props = {
  stock: Stock;
};

export const OverviewBarContainer = ({ stock }: Props) => {
  const { quote, error } = useQuote(stock.ticker);

  if (error) {
    return <Typography>There was an error</Typography>;
  }

  const details = getStockPriceQuote({
    ...stock,
    price: quote?.price ?? null,
    change: quote?.change ?? null,
  });

  return <OverviewBar variant="large" details={details} />;
};
