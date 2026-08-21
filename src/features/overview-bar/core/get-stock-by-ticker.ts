import type { Stock } from "../../../types/stock";
import { stocksByTicker } from "../../stock-list/core/stock";

export const getStockByTicker = (
  ticker: string | undefined,
): Stock | undefined => {
  if (!ticker) {
    return undefined;
  }

  return stocksByTicker.get(ticker.toUpperCase());
};
