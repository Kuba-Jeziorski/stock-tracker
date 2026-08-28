import { toSettled } from "../../../libs/utils/integration/to-settled";
import type { StockTicker } from "../../../types/stock";
import type { StockSingleNews } from "../domain/model";
import { fetchNews } from "./fetch-news";

export const fetchSettledNews = async (
  ticker: StockTicker,
): Promise<StockSingleNews[]> => {
  const result = await toSettled(ticker, fetchNews);

  if (result.status === "rejected") {
    throw new Error(
      `Failed to fetch news for ticker: ${ticker}. Reason: ${result.reason}`,
    );
  }

  return result.value;
};
