const RANGE = 7;
const MS_IN_DAY = 1000 * 60 * 60 * 24;

const dateFormatter = (dateInMs: number) => {
  const d = new Date(dateInMs);
  const yyyy = d.getFullYear();

  const m = d.getMonth() + 1;
  const month = m >= 9 ? `${m}` : `0${m}`;

  const dayVal = d.getDate();
  const day = dayVal > 9 ? `${dayVal}` : `0${dayVal}`;

  console.log(`${yyyy}-${month}-${day}`);

  return `${yyyy}-${month}-${day}`;
};

export const getDateRange = (range = RANGE) => {
  const topRange = Date.now();
  const bottomRange = topRange - range * MS_IN_DAY;

  const topDate = dateFormatter(topRange);
  const bottomDate = dateFormatter(bottomRange);

  return [bottomDate, topDate];
};
