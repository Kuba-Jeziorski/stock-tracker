import { companies } from "../../../assets/data/stocks.json";
import type { Stock } from "../../../types/stock";

// TODO: move to global scope

export const stocks: Stock[] = companies;

export const stocksByTicker = new Map<string, Stock>(
  stocks.map((stock) => [stock.ticker.toUpperCase(), stock]),
);
