import { companies } from "../../../assets/data/stocks.json";
import { useMemo, useState } from "react";
import { PER_PAGE } from "../core/constants";
import { StockList } from "./stock-list";
import { Pagination } from "./pagination";
import { useQuotes } from "../integration/use-quotes";
import { Typography } from "@mui/material";
import type { Stock } from "../../../types/stock";

const stocks: Stock[] = companies;

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

  if (error) {
    return <Typography>There was an error</Typography>;
  }

  if (stocks.length === 0) {
    return <Typography>No records</Typography>;
  }

  const quotesByTicker = new Map(
    (quotes ?? []).map((quote) => [quote.ticker, quote]),
  );

  const detailedStocksPerPage = stocksPerPage.map((stock) => {
    const quote = quotesByTicker.get(stock.ticker);

    return {
      ...stock,
      price: quote?.price ?? null,
      change: quote?.change ?? null,
    };
  });

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
