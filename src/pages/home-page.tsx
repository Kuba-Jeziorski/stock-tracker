import { Container, Stack } from "@mui/material";
import { StocksComponent } from "../features/stock-list/presentation/stock-list-container";
import { setTabTitle } from "../utils/set-tab-title";

export const HomePage = () => {
  setTabTitle("Home");

  return (
    <Container maxWidth={false} disableGutters>
      <Stack>
        {/* Watchlist */}
        {/* Filter & Sort */}
        <StocksComponent />
      </Stack>
    </Container>
  );
};
