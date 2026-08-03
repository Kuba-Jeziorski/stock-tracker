import { BehaviorSubject } from "rxjs";
import type { StockSymbol } from "../../shared/types/stock";

export const createSelectedStore = () => {
  const selectedStock$ = new BehaviorSubject<StockSymbol | null>(null);

  const selectStock = (symbol: StockSymbol) => {
    selectedStock$.next(symbol);
  };

  return { selectedStock$, selectStock };
};
