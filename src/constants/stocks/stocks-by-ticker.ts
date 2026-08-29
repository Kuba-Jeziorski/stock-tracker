import type { Stock } from "../../types/stock";
import { stocks } from "./stocks";

export const stocksByTicker = new Map<string, Stock>(
  stocks.map((stock) => [stock.ticker.toUpperCase(), stock]),
);
