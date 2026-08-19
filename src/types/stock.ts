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

export type FinnhubQuote = {
  c: number;
  d: number | null;
  dp: number | null;
  h: number;
  l: number;
  o: number;
  pc: number;
  t: number;
};
