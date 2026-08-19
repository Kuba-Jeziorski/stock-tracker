import type { FallbackProps } from "react-error-boundary";
import { SOMETHING_WENT_WRONG, TRY_AGAIN } from "../constants/constants";
import { Box, Button, Typography } from "@mui/material";

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <Typography variant="h1">{SOMETHING_WENT_WRONG}</Typography>
        <Typography>{error instanceof Error ? error.message : ""}</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "custom.background.navy",
            color: "custom.text.secondary",
          }}
          onClick={resetErrorBoundary}
        >
          {TRY_AGAIN}
        </Button>
      </Box>
    </Box>
  );
};
