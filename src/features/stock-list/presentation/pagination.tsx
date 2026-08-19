import { Box, Button, Typography } from "@mui/material";
import { BOUNDARY_COUNT, PER_PAGE, SIBLING_COUNT } from "../core/constants";
import { getPaginationItems } from "../core/pagination";

type Props = {
  totalCount: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
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
          textDecoration: "none",
          color: "custom.text.secondary",
          backgroundColor: "custom.background.navy",
          textTransform: "capitalize",
          display: "flex",
          alignItems: "center",
          gap: 2,
          border: 1,
          borderColor: "custom.background.navy",
          borderRadius: 8,
          paddingX: 2,
          paddingY: 1,
          transition: "all 0.3s",
          "&:hover": {
            color: "custom.text.navy",
            backgroundColor: "custom.background.light",
          },
          "&:disabled": {
            borderColor: "custom.button.disabledText",
          },
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
                textDecoration: "none",
                color: "custom.text.secondary",
                backgroundColor: "custom.background.navy",
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
                gap: 2,
                border: 1,
                borderColor: "custom.background.navy",
                borderRadius: 8,
                paddingX: 2,
                paddingY: 1,
                transition: "all 0.3s",
                "&:hover": {
                  color: "custom.text.navy",
                  backgroundColor: "custom.background.light",
                },
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
          textDecoration: "none",
          color: "custom.text.secondary",
          backgroundColor: "custom.background.navy",
          textTransform: "capitalize",
          display: "flex",
          alignItems: "center",
          gap: 2,
          border: 1,
          borderColor: "custom.background.navy",
          borderRadius: 8,
          paddingX: 2,
          paddingY: 1,
          transition: "all 0.3s",
          "&:hover": {
            color: "custom.text.navy",
            backgroundColor: "custom.background.light",
          },
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
