import type { DetailedStock } from "../../../types/stock";
import type { Detail } from "../domain/model";

export const transformStockToDetails = (stock: DetailedStock): Detail[] => [
  {
    kind: "text",
    label: "Ticker",
    value: stock.ticker,
  },
  {
    kind: "text",
    label: "Company",
    value: stock.name,
  },
  {
    kind: "price",
    label: "Price",
    value: stock.price,
  },
  {
    kind: "change",
    label: "Change",
    value: stock.change,
  },
];
