export type StockTicker = string;

export type Stock = {
  ticker: StockTicker;
  name: string;
  sector: string;
};

export type StockQuote = {
  ticker: StockTicker;
  price: number;
  change: number;
};

export type DetailedStock = Stock & {
  price: number | null;
  change: number | null;
};
