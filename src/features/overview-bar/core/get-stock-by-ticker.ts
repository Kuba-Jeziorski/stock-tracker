import { companies } from "../../../assets/data/stocks.json";
import type { Stock } from "../../../types/stock";

const stocks: Stock[] = companies;

export const getStockByTicker = (
  ticker: string | undefined,
): Stock | undefined => {
  if (!ticker) {
    return undefined;
  }

  const normalizedTicker = ticker.toUpperCase();

  return stocks.find((stock) => stock.ticker === normalizedTicker);
};
