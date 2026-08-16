// import type { Quote } from "../domain/models";
// : Promise<PromiseSettledResult<Quote>[]>

import type { Quote, StockQuote, StockTicker } from "../domain/models";

// TODO: move?
const FINNHUB_API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;

// TODO: move?
const FINNHUB_URL_BASE = "https://finnhub.io/api/v1/quote?symbol=";

export const fetchQuotes = async (
  tickers: StockTicker[],
): Promise<PromiseSettledResult<StockQuote>[]> => {
  try {
    const data = await Promise.allSettled(
      tickers.map(async (ticker) => {
        const response = await fetch(
          `${FINNHUB_URL_BASE}${ticker}&token=${FINNHUB_API_KEY}`,
        );

        if (!response.ok) {
          throw new Error(`Request failed for ${ticker}`);
        }

        const quote: Quote = await response.json();

        // return response.json();
        return { ticker, ...quote };
      }),
    );

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Request failed:", { cause: error });
    } else {
      throw error;
    }
  }
};
