import { Stack } from "@mui/material";
import { WatchlistItem } from "./watchlist-item";
import type { WatchlistItemProps } from "../domain/model";

type Props = {
  data: WatchlistItemProps[];
  isFetching: boolean;
};

export const WatchlistListing = ({ data, isFetching }: Props) => {
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
      {data.map((item) => (
        <WatchlistItem key={item.ticker} item={item} isFetching={isFetching} />
      ))}
    </Stack>
  );
};
