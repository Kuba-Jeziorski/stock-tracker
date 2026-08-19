import { Typography } from "@mui/material";
import type { Stock } from "../../../types/stock";
import { transformStockToDetails } from "../core/transform-stock-to-details";
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

  const details = transformStockToDetails({
    ...stock,
    price: quote?.price ?? null,
    change: quote?.change ?? null,
  });

  return <OverviewBar variant="large" details={details} />;
};
