import { useQueries } from "@tanstack/react-query";
import { QUOTE_STALE_TIME_MS } from "../../../constants/constants";
import type { StockTicker } from "../../../types/stock";
import { fetchSettledQuote } from "../../../libs/utils/integration/quote/fetch-settled-quote";

export const useQuotes = (tickers: StockTicker[]) => {
  const results = useQueries({
    queries: tickers.map((ticker) => ({
      queryKey: ["quote", ticker],
      queryFn: () => fetchSettledQuote(ticker),
      enabled: Boolean(ticker),
      staleTime: QUOTE_STALE_TIME_MS,
    })),
  });

  const quotes = results.flatMap((result) =>
    result.data ? [result.data] : [],
  );
  const isFetching = results.some((result) => result.isFetching);
  const error =
    tickers.length > 0 &&
    results.length > 0 &&
    results.every((result) => result.isError)
      ? results[0].error
      : null;

  return { isFetching, quotes, error };
};
