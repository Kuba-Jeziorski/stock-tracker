export type Stock = {
  ticker: string;
  name: string;
  sector: string;
};

export type PaginationItem = number | "start-ellipsis" | "end-ellipsis";

export type GetPaginationItemsArgs = {
  page: number;
  count: number;
  siblingCount: number;
  boundaryCount: number;
};
