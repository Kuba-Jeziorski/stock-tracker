import type { StockBaseStatistics, StockTicker } from "../../../types/stock";

export const StatSettled = async (
  ticker: StockTicker,
  fetchFn: (item: StockTicker) => Promise<StockBaseStatistics>,
) => {
  let result: PromiseSettledResult<StockBaseStatistics>;

  try {
    const value = await fetchFn(ticker);

    result = {
      status: "fulfilled",
      value,
    };
  } catch (reason) {
    result = {
      status: "rejected",
      reason,
    };
  }

  return result;
};
