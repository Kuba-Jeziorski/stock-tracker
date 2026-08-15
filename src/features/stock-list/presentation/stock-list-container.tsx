import { companies } from "../../../assets/data/stocks.json";
import type { Stock } from "../domain/models";
import { useState } from "react";
import { PER_PAGE } from "../core/constants";
import { StockList } from "./stock-list";
import { Pagination } from "./pagination";

const stocks: Stock[] = companies;
// for TanStack
// const stocksTickers = stocks.map((stock) => stock.ticker);

export const StockListContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const stocksPerPage = stocks.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  return (
    <>
      <StockList stocksPerPage={stocksPerPage} />
      <Pagination
        totalCount={stocks.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
