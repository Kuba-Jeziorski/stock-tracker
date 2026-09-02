import { FINNHUB_URL_LOGO_BASE } from "../../../constants/constants";
import type { StockTicker } from "../../../types/stock";

export const getStockLogoUrl = (ticker: StockTicker) =>
  `${FINNHUB_URL_LOGO_BASE}${ticker.toUpperCase()}.png`;
