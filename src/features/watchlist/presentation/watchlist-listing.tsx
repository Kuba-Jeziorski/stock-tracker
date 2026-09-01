import { Stack } from "@mui/material";
import { WatchlistItem } from "./watchlist-item";
import type { WatchlistItemProps } from "../domain/model";
import { useEffect, useState } from "react";

const DUMMY_DATA: WatchlistItemProps[] = [
  {
    ticker: "AAPL",
    name: "Apple Inc",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/AAPL.png",
    price: 12,
    change: 0.51,
  },
  {
    ticker: "MMM",
    name: "3M Co",
    logo: "https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/MMM.png",
    price: 16,
    change: -0.23,
  },
];

export const WatchlistListing = () => {
  const [isFetching, setIsFetching] = useState(true);

  // dummy
  useEffect(() => {
    const endFetch = () => {
      setIsFetching(false);
    };

    setTimeout(() => {
      endFetch();
    }, 1000);
  }, []);

  return (
    <Stack direction="row" sx={{ flex: 1, width: 1, gap: 2, overflow: "auto" }}>
      {DUMMY_DATA.map((item) => (
        <WatchlistItem key={item.ticker} item={item} isFetching={isFetching} />
      ))}
    </Stack>
  );
};
