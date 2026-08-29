import type { StockQuote, StockTicker } from "../../../types/stock";
import { fetchQuote } from "../../../libs/utils/integration/quote/fetch-quote";
import { mapSettledSequentially } from "./map-settled-sequentially";

export const fetchQuotes = async (
  tickers: StockTicker[],
): Promise<StockQuote[]> => {
  // not a promise anymore; array of mixed fulfilled and rejected results
  const results = await mapSettledSequentially(tickers, fetchQuote);

  // rejected quotes are changed into empty array and fulfilled ones value is stored in an array
  // flat is applied so empty arrays are gone and result.value is out of array
  // at the end there is a simple array with fulfillted quotes
  const quotes = results.flatMap((result) =>
    result.status === "fulfilled" ? [result.value] : [],
  );

  // non-empty array was passed, but quotes (fulfilled) array is empty (nothing succeed)
  if (tickers.length > 0 && quotes.length === 0) {
    const firstRejection = results.find(
      (result) => result.status === "rejected",
    );
    const reason =
      firstRejection?.status === "rejected" ? firstRejection.reason : undefined;
    const message =
      reason instanceof Error ? reason.message : "All quote requests failed";

    throw new Error(message);
  }

  return quotes;
};
