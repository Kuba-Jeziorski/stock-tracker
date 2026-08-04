export type Stock = {
  symbol: string;
  name: string;
};

export type StockSymbol = Stock["symbol"];

export type StockName = Stock["name"];
