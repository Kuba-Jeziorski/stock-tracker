const BILION = 1000;
const TRILION = 1000000;

export const marketCapitalizationFormatter = (capitalization: number) => {
  const value = Math.ceil(capitalization);

  if (value >= TRILION) {
    return `$${(value / TRILION).toFixed(3)} T`;
  }

  if (value >= BILION) {
    return `$${(value / BILION).toFixed(3)} B`;
  }

  return `$${value.toFixed(3)} M`;
};
