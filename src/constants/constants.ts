export const COMPARE_LABEL = "compare";
export const COMPARE_URL = "compare";
export const SOMETHING_WENT_WRONG = "something went wrong";
export const TRY_AGAIN = "try again";

export const FINNHUB_API_KEY = import.meta.env.VITE_FINNHUB_API_KEY;
export const FINNHUB_URL_QUOTE_BASE = "https://finnhub.io/api/v1/quote?symbol=";
export const FINNHUB_URL_STAT_BASE =
  "https://finnhub.io/api/v1/stock/profile2?symbol=";
export const FINNHUB_URL_NEWS_BASE =
  "https://finnhub.io/api/v1/company-news?symbol=";
export const FINNHUB_URL_LOGO_BASE =
  "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/";

export const QUOTE_STALE_TIME_MS = 3_600_000;
export const STAT_STALE_TIME_MS = 86_400_000;

export const WISHLIST_LIMIT = 5;
