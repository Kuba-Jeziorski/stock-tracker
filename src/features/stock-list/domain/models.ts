import type { Stock, StockTicker } from "../../../types/stock";

export type StockQuote = {
  ticker: StockTicker;
  price: number;
  change: number;
};

export type DetailedStock = Stock & {
  price: number | null;
  change: number | null;
};
