export type StockTicker = string;

export type Stock = {
  ticker: StockTicker;
  name: string;
  sector: string;
};

export type DetailedStock = {
  ticker: StockTicker;
  name: string;
  sector: string;
  price: number | null;
  change: number | null;
};

export type Quote = {
  c: number;
  d: number;
  dp: number;
  h: number;
  l: number;
  o: number;
  pc: number;
  t: number;
};

export type StockQuote = Quote & {
  ticker: StockTicker;
};

// fetch API types
