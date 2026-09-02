import { useQueries } from "@tanstack/react-query";
import type { StockTicker } from "../../../../types/stock";
import { quoteQueryOptions } from "./quote-query-options";

export const useQuotes = (tickers: StockTicker[]) => {
  const results = useQueries({
    queries: tickers.map(quoteQueryOptions),
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
