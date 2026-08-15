import { Container, Stack } from "@mui/material";
import { StockList } from "../features/stock-list/presentation/main";
import { useEffect } from "react";
import { setTabTitle } from "../utils/set-tab-title";

export const HomePage = () => {
  useEffect(() => {
    setTabTitle("Home");
  }, []);

  return (
    <Container maxWidth={false} disableGutters>
      <Stack>
        {/* Watchlist */}
        {/* Filter & Sort */}
        <StockList />
      </Stack>
    </Container>
  );
};
