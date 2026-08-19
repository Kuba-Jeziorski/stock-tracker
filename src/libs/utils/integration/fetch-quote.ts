import {
  FINNHUB_API_KEY,
  FINNHUB_URL_BASE,
} from "../../../constants/constants";
import type {
  FinnhubQuote,
  StockQuote,
  StockTicker,
} from "../../../types/stock";
import { isValidQuote } from "./is-valid-quote";

export const fetchQuote = async (ticker: StockTicker): Promise<StockQuote> => {
  if (!FINNHUB_API_KEY) {
    throw new Error("Missing VITE_FINNHUB_API_KEY");
  }

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
