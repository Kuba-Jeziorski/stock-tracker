import type { StockQuote, StockTicker } from "../domain/models";
// import { QUOTE_FETCH_CONCURRENCY } from "../core/constants";

const FINNHUB_API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;

const FINNHUB_URL_BASE = "https://finnhub.io/api/v1/quote?symbol=";

type FinnhubQuote = {
  c: number;
  d: number | null;
  dp: number | null;
  h: number;
  l: number;
  o: number;
  pc: number;
  t: number;
};

// if isValidQuote returns true treat quote as more specific type (with dp: number, no dp: number | null)
const isValidQuote = (
  quote: FinnhubQuote,
): quote is FinnhubQuote & { dp: number } => {
  return Number.isFinite(quote.c) && Number.isFinite(quote.dp) && quote.t > 0;
};

const fetchQuote = async (ticker: StockTicker): Promise<StockQuote> => {
  const response = await fetch(
    `${FINNHUB_URL_BASE}${ticker}&token=${FINNHUB_API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(`Request failed for ${ticker} (${response.status})`);
  }

  const quote: FinnhubQuote = await response.json();

  if (!isValidQuote(quote)) {
    throw new Error(`No quote for ${ticker}`);
  }

  return {
    ticker,
    price: quote.c,
    change: quote.dp,
  };
};

const mapSettledSequentially = async <T, R>(
  items: T[],
  mapper: (item: T) => Promise<R>,
): Promise<PromiseSettledResult<R>[]> => {
  const results: PromiseSettledResult<R>[] = [];

  for (const [index, item] of items.entries()) {
    try {
      const value = await mapper(item);

      results[index] = {
        status: "fulfilled",
        value,
      };
    } catch (reason) {
      results[index] = {
        status: "rejected",
        reason,
      };
    }
  }

  return results;
};

export const fetchQuotes = async (
  tickers: StockTicker[],
): Promise<StockQuote[]> => {
  if (!FINNHUB_API_KEY) {
    throw new Error("Missing VITE_FINNHUB_API_KEY");
  }

  const results = await mapSettledSequentially(tickers, fetchQuote);

  const quotes = results.flatMap((result) =>
    result.status === "fulfilled" ? [result.value] : [],
  );

  // non-empty array was passed, but quotes (fulfilled) array is empty (nothing succeed)
  if (tickers.length > 0 && quotes.length === 0) {
    const firstRejection = results.find(
      (result) => result.status === "rejected",
    );
    const reason =
      firstRejection?.status === "rejected" ? firstRejection.reason : undefined;
    const message =
      reason instanceof Error ? reason.message : "All quote requests failed";

    throw new Error(message);
  }

  return quotes;
};
