export const significantFiguresFormatter = (
  value: number,
  sigNumber: number,
) => {
  return Number(value.toFixed(sigNumber));
};
