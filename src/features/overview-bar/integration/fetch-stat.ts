import {
  FINNHUB_API_KEY,
  FINNHUB_URL_STAT_BASE,
} from "../../../constants/constants";
import type {
  FinnhubStat,
  StockBaseStatistics,
  StockTicker,
} from "../../../types/stock";
import { isValidStat } from "../core/is-valid-stat";

export const fetchStat = async (
  ticker: StockTicker,
): Promise<StockBaseStatistics> => {
  if (!FINNHUB_API_KEY) {
    throw new Error("Missing VITE_FINNHUB_API_KEY");
  }

  const response = await fetch(
    `${FINNHUB_URL_STAT_BASE}${ticker}&token=${FINNHUB_API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(`Request failed for ${ticker} (${response.status})`);
  }

  const stat: FinnhubStat = await response.json();

  if (!isValidStat(stat)) {
    throw new Error(`No stat for ${ticker}`);
  }

  return {
    country: stat.country,
    ipo: stat.ipo,
    marketCapitalization: stat.marketCapitalization,
  };
};
