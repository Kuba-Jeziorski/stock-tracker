import { Container, Stack, Typography } from "@mui/material";
import { StockListContainer } from "../features/stock-list/presentation/stock-list-container";
import { useTabTitle } from "../libs/utils/use-tab-title";
import { useState } from "react";
import { initialFilter } from "../shared/filter/initial-filter";
import { stocks } from "../constants/stocks/stocks";
import { applyFilter } from "../libs/utils/apply-filter";
import { FilterContainer } from "../features/filter/presentation/filter-container";

export const HomePage = () => {
  useTabTitle("Home");

  const [filter, setFilter] = useState(initialFilter);
  const visibleStocks = applyFilter(stocks, filter);

  return (
    <Container maxWidth={false} sx={{ height: 1, p: 0 }}>
      <Stack
        direction="column"
        sx={{ gap: 3, height: 1, justifyContent: "end" }}
      >
        {/* Watchlist */}
        <Typography>watchlist</Typography>
        <FilterContainer filter={filter} setFilter={setFilter} />
        <StockListContainer visibleStocks={visibleStocks} />
      </Stack>
    </Container>
  );
};
