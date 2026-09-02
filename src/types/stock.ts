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

export type StockBaseStatistics = {
  country: string;
  ipo: string;
  marketCapitalization: number;
  logo: string;
};

export type StockStatistics = {
  country: string | null;
  ipo: string | null;
  marketCapitalization: number | null;
  sector: string;
};

export type FinnhubStat = {
  ticker: StockTicker;
  name: string;
  country: string | null;
  currency: string;
  estimateCurrency: string;
  exchange: string;
  ipo: string | null;
  marketCapitalization: number | null;
  logo: string;
  shareOutstanding: number;
  finnhubIndustry: string;
  phone: string;
  weburl: string;
  floatingShare: number;
};
