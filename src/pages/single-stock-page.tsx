import { useParams } from "react-router";

import { companies } from "../assets/data/stocks.json";
import { useTabTitle } from "../libs/utils/use-tab-title";
import type { Stock, StockTicker } from "../types/stock";
import { OverviewBar } from "../features/overview-bar/presentation/overview-bar";
import type { Detail } from "../features/overview-bar/domain/model";

const stocks: Stock[] = companies;
const tickers: StockTicker[] = stocks.map((stock) => stock.ticker);

export const SingleStockPage = () => {
  const params = useParams();
  const paramsStockTicker = params.stockTicker?.toUpperCase();
  const isValidTicker =
    paramsStockTicker && tickers.includes(paramsStockTicker) ? true : false;
  const tabTitle = isValidTicker
    ? `- ${paramsStockTicker?.toUpperCase()}`
    : "- not a valid ticker";

  // const currentStock = stocks.find(
  //   (stock) => stock.ticker === paramsStockTicker,
  // );

  // use ticker and company from static companies
  // fetch for a price and change from Finnhub (similar to the stock list)

  useTabTitle(`Single stock ${tabTitle}`);

  const data: Detail[] = [
    {
      kind: "text",
      label: "Ticker",
      value: "AAPL",
    },
    {
      kind: "text",
      label: "Company",
      value: "Apple Inc.",
    },
    {
      kind: "price",
      label: "Price",
      value: 100,
    },
    {
      kind: "change",
      label: "Change",
      value: 0.03,
    },
  ];

  return <OverviewBar variant="large" details={data} />;
};
