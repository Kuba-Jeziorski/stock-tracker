import type { StockBaseStatistics, StockTicker } from "../../../../types/stock";
import { fetchStat } from "./fetch-stat";
import { toSettled } from "../to-settled";

export const fetchSettledStat = async (
  ticker: StockTicker,
): Promise<StockBaseStatistics> => {
  const result = await toSettled(ticker, fetchStat);

  if (result.status === "rejected") {
    throw new Error(
      `Failed to fetch stat for ticker: ${ticker}. Reason: ${result.reason}`,
    );
  }

  return result.value;
};
