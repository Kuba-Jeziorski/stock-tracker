const BILION = 1000;
const TRILION = 1000000;
const SIGNIFICANT_FIGURES = 2;

export const marketCapitalizationFormatter = (capitalization: number) => {
  const value = Math.ceil(capitalization);

  if (value >= TRILION) {
    return `$${(value / TRILION).toFixed(SIGNIFICANT_FIGURES)} T`;
  }

  if (value >= BILION) {
    return `$${(value / BILION).toFixed(SIGNIFICANT_FIGURES)} B`;
  }

  return `$${value.toFixed(SIGNIFICANT_FIGURES)} M`;
};
