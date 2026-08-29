export const significantFiguresFormatter = (
  value: number,
  sigNumber: number,
) => {
  return value.toFixed(sigNumber);
};
