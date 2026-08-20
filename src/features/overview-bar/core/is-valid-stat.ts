import type { FinnhubStat } from "../../../types/stock";

export const isValidStat = (
  stat: FinnhubStat,
): stat is FinnhubStat & {
  country: string;
  ipo: string;
  marketCapitalization: number;
} => {
  return (
    typeof stat.country === "string" &&
    stat.country !== "" &&
    typeof stat.ipo === "string" &&
    stat.ipo !== "" &&
    Number.isFinite(stat.marketCapitalization)
  );
};
