import { Box, Button, Typography } from "@mui/material";
import { BOUNDARY_COUNT, PER_PAGE, SIBLING_COUNT } from "../domain/constants";
import { getPaginationItems } from "../core/pagination";
import type { Stock } from "../domain/models";

type Props = {
  stocks: Stock[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination = ({ stocks, currentPage, setCurrentPage }: Props) => {
  const stockQuantity = stocks.length;
  const pagesQuantity = Math.max(1, Math.ceil(stockQuantity / PER_PAGE));
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesQuantity;

  const paginationItems = getPaginationItems({
    page: currentPage,
    count: pagesQuantity,
    siblingCount: SIBLING_COUNT,
    boundaryCount: BOUNDARY_COUNT,
  });

  const previousPage = () => {
    setCurrentPage((current) => Math.max(1, current - 1));
  };

  const nextPage = () => {
    setCurrentPage((current) => Math.min(pagesQuantity, current + 1));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box
      sx={{
        marginTop: 4,
        display: "flex",
        width: 1,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Button
        sx={{
          backgroundColor: "custom.background.navy",
        }}
        variant="contained"
        onClick={previousPage}
        disabled={isFirstPage}
      >
        Previous page
      </Button>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        {paginationItems.map((item) => {
          if (item === "start-ellipsis" || item === "end-ellipsis") {
            return (
              <Typography key={item} sx={{ px: 1 }}>
                …
              </Typography>
            );
          }

          const isActive = item === currentPage;

          return (
            <Button
              key={item}
              variant={isActive ? "contained" : "outlined"}
              onClick={() => goToPage(item)}
              sx={{
                borderColor: "custom.background.navy",
                color: "custom.background.navy",
                minWidth: 40,
                ...(isActive && {
                  backgroundColor: "custom.background.navy",
                  color: "custom.text.secondary",
                }),
              }}
            >
              {item}
            </Button>
          );
        })}
      </Box>
      <Button
        sx={{
          backgroundColor: "custom.background.navy",
        }}
        variant="contained"
        onClick={nextPage}
        disabled={isLastPage}
      >
        Next page
      </Button>
    </Box>
  );
};
