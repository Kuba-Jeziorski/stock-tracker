import type { StockQuote, StockTicker } from "../../../../types/stock";
import { fetchQuote } from "./fetch-quote";
import { toSettled } from "../to-settled";

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
