import { useQuery } from "@tanstack/react-query";
import { QUOTE_STALE_TIME_MS } from "../../../constants/constants";
import type { StockTicker } from "../../../types/stock";
import { fetchQuotes } from "./fetch-quotes";

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
  });

  return { isFetching, quotes, error };
};
