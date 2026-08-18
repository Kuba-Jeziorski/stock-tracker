import { Box, Container, Stack } from "@mui/material";
import { Navigation } from "./navigation";

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
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        backgroundColor: "custom.background.default",
      }}
    >
      <Stack
        direction="column"
        sx={{
          height: 1,
          minHeight: 0,
          flex: 1,
        }}
      >
        <Navigation />
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            overflow: "auto",
            p: 4,
          }}
        >
          {children}
        </Box>
      </Stack>
    </Container>
  );
};
