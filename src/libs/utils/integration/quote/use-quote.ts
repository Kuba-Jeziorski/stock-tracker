import { useQuery } from "@tanstack/react-query";
import { QUOTE_STALE_TIME_MS } from "../../../../constants/constants";
import type { StockTicker } from "../../../../types/stock";
import { fetchSettledQuote } from "./fetch-settled-quote";

export const useQuote = (ticker: StockTicker) => {
  const {
    isFetching,
    data: quote,
    error,
  } = useQuery({
    queryKey: ["quote", ticker],
    queryFn: () => fetchSettledQuote(ticker),
    enabled: Boolean(ticker),
    staleTime: QUOTE_STALE_TIME_MS,
  });

  return { isFetching, quote, error };
};
