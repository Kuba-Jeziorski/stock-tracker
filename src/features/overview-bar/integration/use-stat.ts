import { useQuery } from "@tanstack/react-query";
import type { StockTicker } from "../../../types/stock";
import { STAT_STALE_TIME_MS } from "../core/constants";
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
    staleTime: STAT_STALE_TIME_MS,
  });

  return { isFetching, stat, error };
};
