import { fetchQuote } from "../../../libs/utils/integration/fetch-quote";
import type { StockQuote, StockTicker } from "../../../types/stock";
import { QuoteSettled } from "./quote-settled";

export const fetchSettledQuote = async (
  ticker: StockTicker,
): Promise<StockQuote> => {
  const result = await QuoteSettled(ticker, fetchQuote);

  if (result.status === "rejected") {
    throw new Error(
      `Failed to fetch quote for ticker: ${ticker}. Reason: ${result.reason}`,
    );
  }

  return result.value;
};
