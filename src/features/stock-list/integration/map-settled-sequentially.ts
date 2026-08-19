// mapSettledSequentially return type is dependent on fetchQuote return type
// its not known if a fetchQuote fulfilled or rejected
// there is a build-in union (where T is the return type of a mapper function - fetchQuote):
// [1] type PromiseFulfilledResult<T> = { status: "fulfilled"; value: T };
// [2] type PromiseRejectedResult = { status: "rejected"; reason: any };
// type PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult;

import type { StockQuote, StockTicker } from "../../../types/stock";

// function is looping over items and changing its shape based on status; returning mixed array
export const mapSettledSequentially = async (
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
