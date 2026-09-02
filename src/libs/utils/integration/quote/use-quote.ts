import { useQuery } from "@tanstack/react-query";
import type { StockTicker } from "../../../../types/stock";
import { quoteQueryOptions } from "./quote-query-options";

export const useQuote = (ticker: StockTicker) => {
  const {
    isFetching,
    data: quote,
    error,
  } = useQuery(quoteQueryOptions(ticker));

  return { isFetching, quote, error };
};
