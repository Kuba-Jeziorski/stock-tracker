import { fetchQuotes } from "./api";
import type { StockTicker } from "../domain/models";
import { useQuery } from "@tanstack/react-query";
import { QUOTE_STALE_TIME_MS } from "../core/constants";

export const useQuotes = (tickers: StockTicker[]) => {
  const {
    isFetching,
    data: quotes,
    error,
  } = useQuery({
    queryKey: ["quotes", tickers],
    queryFn: () => fetchQuotes(tickers),
    // calling this function only if tickers.length > 0
    enabled: tickers.length > 0,
    staleTime: QUOTE_STALE_TIME_MS,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return { isFetching, quotes, error };
};
