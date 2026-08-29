import type { Sector } from "../../constants/stocks/sectors";
import type { Filter } from "../../types/filter";
import type { Stock } from "../../types/stock";

export const applyFiler = (stocks: Stock[], filter: Filter): Stock[] => {
  const { selectedSectors } = filter;

  const filteredStocks = stocks.filter((stock) => {
    if (selectedSectors.includes(stock.sector as Sector)) {
      return stock;
    }
  });

  return filteredStocks;
};
