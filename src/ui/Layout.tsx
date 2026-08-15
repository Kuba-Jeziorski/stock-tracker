import { Container, Stack } from "@mui/material";
import { Navigation } from "./Navigation";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: "100vh",
        maxHeight: "100vh",
      }}
    >
      <Stack direction="column" spacing={4} sx={{ height: 1 }}>
        <Navigation />
        {children}
      </Stack>
    </Container>
  );
};
