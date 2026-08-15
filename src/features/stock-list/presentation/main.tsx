import { Box, Button, Stack, Typography } from "@mui/material";
import { companies } from "./../../../assets/data/stocks.json";
import type { Stock } from "../domain/models";
import { useState } from "react";
import { getPaginationItems } from "../core/pagination";

const stocks: Stock[] = companies;
const perPage = 10;
const siblingCount = 2;
const boundaryCount = 3;

export const StockList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const stockQuantity = stocks.length;
  const pagesQuantity = Math.max(1, Math.ceil(stockQuantity / perPage));
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesQuantity;
  const stocksPerPage = stocks.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );
  const paginationItems = getPaginationItems({
    page: currentPage,
    count: pagesQuantity,
    siblingCount,
    boundaryCount,
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
    <>
      <Stack
        direction="column"
        spacing={4}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          border: 1,
          borderColor: "custom.table.background",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "custom.table.background",
            borderBottom: 1,
            borderColor: "custom.table.separator",
          }}
        >
          <Typography
            sx={{ display: "flex", width: 1, paddingX: 4, paddingY: 2 }}
          >
            Ticker
          </Typography>
          <Typography
            sx={{ display: "flex", width: 1, paddingX: 4, paddingY: 2 }}
          >
            Company
          </Typography>
          <Typography
            sx={{ display: "flex", width: 1, paddingX: 4, paddingY: 2 }}
          >
            Price
          </Typography>
          <Typography
            sx={{ display: "flex", width: 1, paddingX: 4, paddingY: 2 }}
          >
            Change
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: "0 !important",
          }}
        >
          {stocksPerPage.map((stock) => {
            return (
              <Box
                key={stock.ticker}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: 1,
                  borderColor: "custom.table.separator",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    width: 1,
                    paddingX: 4,
                    paddingY: 2,
                    fontWeight: 600,
                  }}
                >
                  {stock.ticker}
                </Typography>
                <Typography
                  sx={{ display: "flex", width: 1, paddingX: 4, paddingY: 2 }}
                >
                  {stock.name}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    width: 1,
                    paddingX: 4,
                    paddingY: 2,
                    fontWeight: 600,
                  }}
                >
                  Price
                </Typography>
                <Typography
                  sx={{ display: "flex", width: 1, paddingX: 4, paddingY: 2 }}
                >
                  Change %
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Stack>
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
    </>
  );
};
