import { Stack, Typography } from "@mui/material";
import { WatchlistListing } from "./watchlist-listing";

export const WatchlistContainer = () => {
  return (
    <Stack direction="column" sx={{ gap: 2 }}>
      <Typography variant="h2" sx={{ fontSize: 22, fontWeight: 600 }}>
        Watchlist
      </Typography>
      <WatchlistListing />
    </Stack>
  );
};
