import { stocksByTicker } from "../../../constants/stocks/stocks-by-ticker";
import type { Stock } from "../../../types/stock";

export const getStockByTicker = (
  ticker: string | undefined,
): Stock | undefined => {
  if (!ticker) {
    return undefined;
  }

  return stocksByTicker.get(ticker.toUpperCase());
};
