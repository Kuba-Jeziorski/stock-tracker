import type { Detail } from "../domain/model";

export const detailValueFormatter = (detail: Detail): string => {
  const { kind, value } = detail;

  if (value == null) {
    return "N/A";
  }

  if (typeof value === "number") {
    if (kind === "change") {
      return `${value}%`;
    }
    if (kind === "price") {
      return `$${value}`;
    }
  }

  return `${value}`;
};
