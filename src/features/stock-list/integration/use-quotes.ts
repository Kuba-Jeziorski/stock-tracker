import { useEffect, useState } from "react";
import { fetchQuotes } from "./api";
import type { StockQuote, StockTicker } from "../domain/models";

export const useQuotes = (tickers: StockTicker[]) => {
  const [quotes, setQuotes] = useState<PromiseSettledResult<StockQuote>[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getQuotes = async () => {
      try {
        setLoading(true);

        const fetched = await fetchQuotes(tickers);
        setQuotes(fetched);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };
    getQuotes();
  }, [tickers]);

  return { quotes, loading, error };
};
