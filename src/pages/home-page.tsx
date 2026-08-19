import { Container, Stack } from "@mui/material";
import { StockListContainer } from "../features/stock-list/presentation/stock-list-container";
import { useTabTitle } from "../../libs/utils/use-tab-title";

export const HomePage = () => {
  useTabTitle("Home");

  return (
    <Container maxWidth={false} disableGutters>
      <Stack>
        {/* Watchlist */}
        {/* Filter & Sort */}
        <StockListContainer />
      </Stack>
    </Container>
  );
};
