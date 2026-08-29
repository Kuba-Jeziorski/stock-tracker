import type { Theme } from "@mui/material";

export const getChangeColor = (change: number | null) => (theme: Theme) => {
  if (change == null || change === 0) {
    return theme.palette.custom.text.primary;
  }

  return change > 0
    ? theme.palette.custom.status.positive
    : theme.palette.custom.status.negative;
};
