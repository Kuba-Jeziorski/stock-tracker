import { queryOptions } from "@tanstack/react-query";
import { QUOTE_STALE_TIME_MS } from "../../../../constants/constants";
import type { StockTicker } from "../../../../types/stock";
import { fetchSettledQuote } from "./fetch-settled-quote";

export const quoteQueryOptions = (ticker: StockTicker) =>
  queryOptions({
    queryKey: ["quote", ticker],
    queryFn: () => fetchSettledQuote(ticker),
    enabled: Boolean(ticker),
    staleTime: QUOTE_STALE_TIME_MS,
  });
