import type { Detail } from "../domain/model";

export type StockStatistics = {
  country: string;
  ipo: string;
  marketCapitalization: number;
  industry: string;
};

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
    value: stock.industry,
  },
];
