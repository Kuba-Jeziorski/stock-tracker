import { fetchQuote } from "../../../libs/utils/integration/fetch-quote";
import { toSettled } from "../../../libs/utils/integration/to-settled";
import type { StockQuote, StockTicker } from "../../../types/stock";

export const fetchSettledQuote = async (
  ticker: StockTicker,
): Promise<StockQuote> => {
  const result = await toSettled(ticker, fetchQuote);

  if (result.status === "rejected") {
    throw new Error(
      `Failed to fetch quote for ticker: ${ticker}. Reason: ${result.reason}`,
    );
  }

  return result.value;
};
