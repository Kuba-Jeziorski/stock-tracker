import { useQuery } from "@tanstack/react-query";
import type { StockTicker } from "../../../types/stock";
import { fetchSettledNews } from "./fetch-settled-news";
import { NEWS_STALE_TIME_MS } from "../core/constants";

export const useNews = (ticker: StockTicker) => {
  const {
    isFetching,
    data: news,
    error,
  } = useQuery({
    queryKey: ["news", ticker],
    queryFn: () => fetchSettledNews(ticker),
    enabled: Boolean(ticker),
    staleTime: NEWS_STALE_TIME_MS,
  });

  return { isFetching, news, error };
};
