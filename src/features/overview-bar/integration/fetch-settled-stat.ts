import type { StockBaseStatistics, StockTicker } from "../../../types/stock";
import { fetchStat } from "./fetch-stat";
import { StatSettled } from "./stat-settled";

export const fetchSettledStat = async (
  ticker: StockTicker,
): Promise<StockBaseStatistics> => {
  const result = await StatSettled(ticker, fetchStat);

  if (result.status === "rejected") {
    throw new Error(
      `Failed to fetch quote for ticker: ${ticker}. Reason: ${result.reason}`,
    );
  }

  return result.value;
};
