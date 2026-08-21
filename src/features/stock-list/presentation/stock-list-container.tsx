import { useMemo, useState } from "react";
import { Typography } from "@mui/material";
import { PER_PAGE } from "../core/constants";
import { stocks } from "../core/stock";
import { useQuotes } from "../integration/use-quotes";
import { Pagination } from "./pagination";
import { StockList } from "./stock-list";

export const StockListContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const stocksPerPage = useMemo(
    () => stocks.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE),
    [currentPage],
  );

  const stockTickers = useMemo(
    () => stocksPerPage.map((stock) => stock.ticker),
    [stocksPerPage],
  );

  const { quotes, isFetching, error } = useQuotes(stockTickers);

  const detailedStocksPerPage = useMemo(() => {
    const quotesByTicker = new Map(
      (quotes ?? []).map((quote) => [quote.ticker, quote]),
    );

    return stocksPerPage.map((stock) => {
      const quote = quotesByTicker.get(stock.ticker);

      return {
        ...stock,
        price: quote?.price ?? null,
        change: quote?.change ?? null,
      };
    });
  }, [quotes, stocksPerPage]);

  if (error) {
    return <Typography>There was an error</Typography>;
  }

  if (stocks.length === 0) {
    return <Typography>No records</Typography>;
  }

  return (
    <>
      <StockList
        stocksPerPage={detailedStocksPerPage}
        isFetching={isFetching}
      />
      <Pagination
        totalCount={stocks.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
