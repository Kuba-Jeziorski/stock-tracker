export const dateFormatter = (dateInMs: number) => {
  const d = new Date(dateInMs);
  const yyyy = d.getFullYear();

  const m = d.getMonth() + 1;
  const month = m >= 10 ? `${m}` : `0${m}`;

  const dayVal = d.getDate();
  const day = dayVal > 10 ? `${dayVal}` : `0${dayVal}`;

  return `${yyyy}-${month}-${day}`;
};
