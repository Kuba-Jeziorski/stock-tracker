import { SECTORS } from "../../constants/stocks/sectors";
import type { Filter } from "../../types/filter";

export const initialFilter: Filter = {
  selectedSectors: [...SECTORS],
};
