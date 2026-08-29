import type { StockTicker } from "../../../types/stock";

export type CreateColumnProps = {
  name: string;
  ticker: StockTicker;
  country: string;
  ipo: string;
  marketCapitalization: number | string;
  industry: string;
  currentPrice: number | string;
  change: number;
};
