import { Container, Stack } from "@mui/material";

import { Menu } from "./shared/components/menu";
import { StockContainer } from "./shared/components/stock-container";

function App() {
  return (
    <Container
      maxWidth={false}
      sx={{ paddingTop: 4, paddingBottom: 4, height: "100vh" }}
    >
      <Stack direction="column" spacing={4} sx={{ height: "100%" }}>
        <Menu />
        <StockContainer />
      </Stack>
    </Container>
  );
}

export default App;
