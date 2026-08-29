import {
  FINNHUB_API_KEY,
  FINNHUB_URL_NEWS_BASE,
} from "../../../constants/constants";
import type { StockTicker } from "../../../types/stock";
import { getDateRange } from "../core/get-date-range";
import type { StockSingleNews } from "../domain/model";

export const fetchNews = async (
  ticker: StockTicker,
): Promise<StockSingleNews[]> => {
  if (!FINNHUB_API_KEY) {
    throw new Error("Missing VITE_FINNHUB_API_KEY");
  }

  const [bottomDate, topDate] = getDateRange();

  const response = await fetch(
    `${FINNHUB_URL_NEWS_BASE}${ticker}&from=${bottomDate}&to=${topDate}&token=${FINNHUB_API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(`Request failed for ${ticker} (${response.status})`);
  }

  const news: StockSingleNews[] = await response.json();

  return news;
};
