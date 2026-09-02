import { Box, Stack, Typography } from "@mui/material";
import { WatchlistListing } from "./watchlist-listing";
import { useState } from "react";
import type { StockTicker } from "../../../types/stock";
import { WISHLIST_LIMIT } from "../../../constants/constants";

// const DUMMY_DATA: WatchlistItemProps[] = [
//   {
//     ticker: "AAPL",
//     name: "Apple Inc",
//     logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AAPL.png",
//     price: 12,
//     change: 0.51,
//   },
//   {
//     ticker: "MMM",
//     name: "3M Co",
//     logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/MMM.png",
//     price: 16,
//     change: -0.23,
//   },
//   {
//     ticker: "MMM",
//     name: "3M Co",
//     logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/MMM.png",
//     price: 16,
//     change: -0.23,
//   },
//   {
//     ticker: "MMM",
//     name: "3M Co",
//     logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/MMM.png",
//     price: 16,
//     change: -0.23,
//   },
//   {
//     ticker: "MMM",
//     name: "3M Co",
//     logo: null,
//     price: null,
//     change: null,
//   },
// ];

export const WatchlistContainer = () => {
  const [localStorageItems] = useState<StockTicker[]>(
    () => {
      const item = localStorage.getItem("wishlist");
      return item ? JSON.parse(item) : [];
    },
  );

  return (
    <Stack direction="column" sx={{ gap: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography variant="h2" sx={{ fontSize: 22, fontWeight: 600 }}>
          Watchlist
        </Typography>
        <Typography>
          {localStorageItems.length} / {WISHLIST_LIMIT}
        </Typography>
      </Box>
      <WatchlistListing tickers={localStorageItems} />
    </Stack>
  );
};
