import type { StockStatistics } from "../../../types/stock";
import type { Detail } from "../domain/model";

export const getStockKeyStatistics = (stock: StockStatistics): Detail[] => [
  {
    kind: "text",
    label: "Country",
    value: stock.country,
  },
  {
    kind: "text",
    label: "Ipo",
    value: stock.ipo,
  },
  {
    kind: "price",
    label: "Market Capitalization",
    value: stock.marketCapitalization,
  },
  {
    kind: "text",
    label: "Industry",
    value: stock.sector,
  },
];
