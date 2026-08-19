import { Container } from "@mui/material";
import { useParams } from "react-router";

import { getStockByTicker } from "../features/overview-bar/core/get-stock-by-ticker";
import { OverviewBarContainer } from "../features/overview-bar/presentation/overview-bar-container";
import { useTabTitle } from "../libs/utils/use-tab-title";

export const SingleStockPage = () => {
  const { stockTicker } = useParams();
  const stock = getStockByTicker(stockTicker);

  useTabTitle(
    stock
      ? `Single stock - ${stock.ticker}`
      : "Single stock - not a valid ticker",
  );

  if (!stock) {
    return <h1>Not a valid ticker</h1>;
  }

  return (
    <Container maxWidth={false} disableGutters>
      <OverviewBarContainer stock={stock} />
    </Container>
  );
};
