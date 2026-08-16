import { companies } from "../../../assets/data/stocks.json";
import type { Stock } from "../domain/models";
import { useMemo, useState } from "react";
import { PER_PAGE } from "../core/constants";
import { StockList } from "./stock-list";
import { Pagination } from "./pagination";
import { useQuotes } from "../integration/use-quotes";
import { Spinner } from "../../../ui/spinner";

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

  const { quotes, loading, error } = useQuotes(stockTickers);

  const isLoading = loading;
  const isError = error;
  const isEmptyQuotes = quotes.length === 0;
  const isOk = !isLoading && !isError && !isEmptyQuotes;

  const detailedStocksPerPage = stocksPerPage.map((stock) => {
    const quoteStock = quotes.find(
      (quote) =>
        quote.status === "fulfilled" && quote.value.ticker === stock.ticker,
    );

    return {
      ...stock,
      price: quoteStock?.status === "fulfilled" ? quoteStock.value.c : null,
      change: quoteStock?.status === "fulfilled" ? quoteStock.value.dp : null,
    };
  });

  console.log(detailedStocksPerPage);

  return (
    <>
      {isLoading && <Spinner />}
      {isError && "There was an error"}
      {isEmptyQuotes && "No records"}
      {isOk && (
        <>
          <StockList stocksPerPage={detailedStocksPerPage} />
          <Pagination
            totalCount={stocks.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </>
  );
};
