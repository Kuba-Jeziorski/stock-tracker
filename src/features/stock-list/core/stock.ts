import { companies } from "../../../assets/data/stocks.json";
import type { Stock } from "../../../types/stock";

export const stocks: Stock[] = companies;

export const stocksByTicker = new Map<string, Stock>(
  stocks.map((stock) => [stock.ticker.toUpperCase(), stock]),
);
