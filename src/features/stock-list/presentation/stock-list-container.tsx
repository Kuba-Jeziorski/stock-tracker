import { useMemo } from "react";
import { Typography } from "@mui/material";
import { PER_PAGE } from "../core/constants";
import { useQuotes } from "../integration/use-quotes";
import { Pagination } from "./pagination";
import { StockList } from "./stock-list";
import { useSearchParams } from "react-router";
import type { Stock } from "../../../types/stock";

type Props = {
  visibleStocks: Stock[];
};

export const StockListContainer = ({ visibleStocks }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const hanglePageChange = (newPage: number) => {
    if (newPage === 1) {
      searchParams.delete("page");
      setSearchParams(searchParams);
    } else {
      setSearchParams({ page: String(newPage) });
    }
  };

  const stocksPerPage = useMemo(
    () =>
      visibleStocks.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE),
    [currentPage, visibleStocks],
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

  if (visibleStocks.length === 0) {
    return <Typography>No records</Typography>;
  }

  return (
    <>
      <StockList
        stocksPerPage={detailedStocksPerPage}
        isFetching={isFetching}
      />
      <Pagination
        totalCount={visibleStocks.length}
        currentPage={currentPage}
        setCurrentPage={hanglePageChange}
      />
    </>
  );
};
