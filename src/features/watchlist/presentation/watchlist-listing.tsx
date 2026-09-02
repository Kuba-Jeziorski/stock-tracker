import { Stack } from "@mui/material";
import { WatchlistItem } from "./watchlist-item";
import type { StockTicker } from "../../../types/stock";

type Props = {
  tickers: StockTicker[];
};

export const WatchlistListing = ({ tickers }: Props) => {
  return (
    <Stack
      direction="row"
      sx={{
        flex: 1,
        width: 1,
        minWidth: 0,
        gap: 2,
        overflowX: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
        "& > *": { flexShrink: 0, width: 186 },
      }}
    >
      {tickers.map((ticker) => (
        <WatchlistItem key={ticker} ticker={ticker} />
      ))}
    </Stack>
  );
};
