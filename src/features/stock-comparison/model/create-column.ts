import type { StockTicker } from "../../../types/stock";

export type CreateColumnProps = {
  name: string;
  ticker: StockTicker;
  country: string;
  ipo: string;
  marketCapitalization: number;
  industry: string;
  currentPrice: number;
  change: number;
};
