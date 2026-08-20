import type { StockTicker } from "../../../types/stock";

export const toSettled = async <T>(
  ticker: StockTicker,
  fetchFn: (item: StockTicker) => Promise<T>,
) => {
  let result: PromiseSettledResult<T>;

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
