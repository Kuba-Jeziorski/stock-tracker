import { companies } from "../../../assets/data/stocks.json";
import type { Stock } from "../domain/models";
import { useState } from "react";
import { PER_PAGE } from "../domain/constants";
import { StockList } from "./stock-list";
import { Pagination } from "./pagination";

const stocks: Stock[] = companies;

export const StocksComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const stocksPerPage = stocks.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  return (
    <>
      <StockList stocksPerPage={stocksPerPage} />
      <Pagination
        stocks={stocks}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
