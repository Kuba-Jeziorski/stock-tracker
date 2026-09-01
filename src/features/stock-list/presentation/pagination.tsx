import { Box, Typography } from "@mui/material";
import { BOUNDARY_COUNT, PER_PAGE, SIBLING_COUNT } from "../core/constants";
import { getPaginationItems } from "../core/pagination";
import { CustomButton } from "./custom-button";

type Props = {
  totalCount: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

export const Pagination = ({
  totalCount,
  currentPage,
  setCurrentPage,
}: Props) => {
  const pagesQuantity = Math.max(1, Math.ceil(totalCount / PER_PAGE));
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesQuantity;

  const paginationItems = getPaginationItems({
    page: currentPage,
    count: pagesQuantity,
    siblingCount: SIBLING_COUNT,
    boundaryCount: BOUNDARY_COUNT,
  });

  const previousPage = () => {
    setCurrentPage(Math.max(1, currentPage - 1));
  };

  const nextPage = () => {
    setCurrentPage(Math.min(pagesQuantity, currentPage + 1));
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: 1,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <CustomButton onClick={previousPage} disabled={isFirstPage}>
        Previous page
      </CustomButton>
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
                . . .
              </Typography>
            );
          }
          const isActive = item === currentPage;

          return (
            <CustomButton
              key={item}
              variant={isActive ? "contained" : "outlined"}
              onClick={() => goToPage(item)}
              sx={{
                minWidth: 40,
                backgroundColor: "custom.background.light",
                color: "custom.text.navy",
                "&:hover": {
                  backgroundColor: "custom.background.navy",
                  color: "custom.text.secondary",
                },
                ...(isActive && {
                  backgroundColor: "custom.background.navy",
                  color: "custom.text.secondary",
                }),
              }}
            >
              {item}
            </CustomButton>
          );
        })}
      </Box>
      <CustomButton onClick={nextPage} disabled={isLastPage}>
        Next page
      </CustomButton>
    </Box>
  );
};
