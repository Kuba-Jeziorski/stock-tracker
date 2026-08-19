type DetailValue = string | number | null;

type DetailKind = "text" | "price" | "change";

export type Detail = {
  kind: DetailKind;
  label: string;
  value: DetailValue;
};

export type OverviewBarVariant = "large" | "standard";
