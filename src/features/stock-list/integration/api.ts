import type { StockQuote, StockTicker } from "../domain/models";

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

// type predicate can be used only on functions that are returning boolean
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

  // returning ticker symbol with current price and current change
  return {
    ticker,
    price: quote.c,
    change: quote.dp,
  };
};

// mapSettledSequentially return type is dependent on fetchQuote return type
// its not known if a fetchQuote fulfilled or rejected
// there is a build-in union (where T is the return type of a mapper function - fetchQuote):
// [1] type PromiseFulfilledResult<T> = { status: "fulfilled"; value: T };
// [2] type PromiseRejectedResult = { status: "rejected"; reason: any };
// type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult;
// function is looping over items and changing its shape based on status; returning mixed array
const mapSettledSequentially = async (
  items: StockTicker[],
  mapper: (item: StockTicker) => Promise<StockQuote>,
): Promise<PromiseSettledResult<StockQuote>[]> => {
  const results: PromiseSettledResult<StockQuote>[] = [];

  // fetching one by one - preventing parallel requests to Finnhub
  for (const [index, item] of items.entries()) {
    try {
      const value = await mapper(item);

      // [1] changing object shape so it fits the PromiseSettledResult type
      results[index] = {
        status: "fulfilled",
        value,
      };
    } catch (reason) {
      // [2] changing object shape so it fits the PromiseSettledResult type
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

  // not a promise anymore; array of mixed fulfilled and rejected results
  const results = await mapSettledSequentially(tickers, fetchQuote);

  // rejected quotes are changed into empty array and fulfilled ones value is stored in an array
  // flat is applied so empty arrays are gone and result.value is out of array
  // at the end there is a simple array with fulfillted quotes
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
