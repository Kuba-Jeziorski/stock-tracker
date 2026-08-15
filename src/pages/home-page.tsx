import { Container, Stack } from "@mui/material";
import { StockList } from "../features/stock-list/presentation/main";

export const HomePage = () => {
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
