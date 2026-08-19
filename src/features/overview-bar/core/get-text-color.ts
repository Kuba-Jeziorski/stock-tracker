import type { Theme } from "@mui/material/styles";
import type { Detail } from "../domain/model";

export const getTextColor = (detail: Detail, theme: Theme) => {
  const isChange = detail.label === "Change";

  if (!isChange || typeof detail.value !== "number" || detail.value === 0) {
    return theme.palette.custom.text.primary;
  }

  return detail.value > 0
    ? theme.palette.custom.status.positive
    : theme.palette.custom.status.negative;
};
