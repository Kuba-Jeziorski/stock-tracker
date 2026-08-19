// type predicate can be used only on functions that are returning boolean

import type { FinnhubQuote } from "../../../types/stock";

// if isValidQuote returns true treat quote as more specific type (with dp: number, no dp: number | null)
export const isValidQuote = (
  quote: FinnhubQuote,
): quote is FinnhubQuote & { dp: number } => {
  return Number.isFinite(quote.c) && Number.isFinite(quote.dp) && quote.t > 0;
};
