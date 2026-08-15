import type { GetPaginationItemsArgs, PaginationItem } from "../domain/models";

const range = (start: number, end: number): number[] => {
  if (end < start) {
    return [];
  }

  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};

export const getPaginationItems = ({
  page,
  count,
  siblingCount,
  boundaryCount,
}: GetPaginationItemsArgs): PaginationItem[] => {
  if (count <= 0) {
    return [];
  }

  const startPages = range(1, Math.min(boundaryCount, count));

  const endPages = range(
    Math.max(count - boundaryCount + 1, boundaryCount + 1),
    count,
  );

  const siblingsStart = Math.max(
    Math.min(page - siblingCount, count - boundaryCount - siblingCount * 2 - 1),
    boundaryCount + 2,
  );

  const siblingsEnd = Math.min(
    Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2),
    endPages.length > 0 ? endPages[0] - 2 : count - 1,
  );

  const siblingPages = range(siblingsStart, siblingsEnd);

  const pageAfterStartBoundary = boundaryCount + 1;
  const pageBeforeEndBoundary = count - boundaryCount;

  const hasGapAfterStart = siblingsStart > pageAfterStartBoundary + 1;
  const canShowPageAfterStart = pageAfterStartBoundary < pageBeforeEndBoundary;
  const startGapItems: PaginationItem[] = hasGapAfterStart
    ? ["start-ellipsis"]
    : canShowPageAfterStart
      ? [pageAfterStartBoundary]
      : [];

  const hasGapBeforeEnd = siblingsEnd < pageBeforeEndBoundary - 1;
  const canShowPageBeforeEnd = pageBeforeEndBoundary > boundaryCount;
  const endGapItems: PaginationItem[] = hasGapBeforeEnd
    ? ["end-ellipsis"]
    : canShowPageBeforeEnd
      ? [pageBeforeEndBoundary]
      : [];

  return [
    ...startPages,
    ...startGapItems,
    ...siblingPages,
    ...endGapItems,
    ...endPages,
  ];
};
