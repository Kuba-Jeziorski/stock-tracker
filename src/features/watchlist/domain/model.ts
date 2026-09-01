import type { StockTicker } from "../../../types/stock";

export type WatchlistItemProps = {
  // stocks JSON
  ticker: StockTicker;
  name: string;
  // company_profile2
  logo: string | null;
  // quote
  price: number | null;
  change: number | null;
};
