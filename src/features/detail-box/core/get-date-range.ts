import { MS_IN_DAY, RANGE } from "./constants";
import { dateFormatter } from "./date-formatter";

export const getDateRange = (range = RANGE) => {
  const topRange = Date.now();
  const bottomRange = topRange - range * MS_IN_DAY;

  const topDate = dateFormatter(topRange);
  const bottomDate = dateFormatter(bottomRange);

  return [bottomDate, topDate];
};
