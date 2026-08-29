import type { CreateColumnProps } from "../model/create-column";

export const createColumn = ({
  name,
  ticker,
  country,
  ipo,
  marketCapitalization,
  industry,
  currentPrice,
  change,
}: CreateColumnProps) => {
  return {
    name,
    ticker,
    country,
    ipo,
    marketCapitalization,
    industry,
    currentPrice,
    change,
  };
};
