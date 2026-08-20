import { useQuery } from "@tanstack/react-query";
import type { StockTicker } from "../../../types/stock";
import { QUOTE_STALE_TIME_MS } from "../../stock-list/core/constants";
import { fetchSettledStat } from "./fetch-settled-stat";

export const useStat = (ticker: StockTicker) => {
  const {
    isFetching,
    data: stat,
    error,
  } = useQuery({
    queryKey: ["stat", ticker],
    queryFn: () => fetchSettledStat(ticker),
    enabled: Boolean(ticker),
    staleTime: QUOTE_STALE_TIME_MS,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return { isFetching, stat, error };
};
