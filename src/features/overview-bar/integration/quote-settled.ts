import type { StockQuote, StockTicker } from "../../../types/stock";

export const QuoteSettled = async (
  ticker: StockTicker,
  fetchFn: (item: StockTicker) => Promise<StockQuote>,
) => {
  let result: PromiseSettledResult<StockQuote>;

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
