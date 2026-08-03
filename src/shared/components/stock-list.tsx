import { Box } from "@mui/material";
import { useState } from "react";
import companiesJSON from "./../../assets/data/sp500.json";
import { StockListRecord } from "./stock-list-record";
import type { Stock } from "../types/stock";
import { useObservable } from "../../handlers/use-observable";
import { facade } from "../../handlers/facade";

export const StockList = () => {
  const [data, setData] = useState<Stock[]>(companiesJSON.companies);

  const bookmarks =
    useObservable(facade.getBookmarks, facade.getBookmarks.getValue()) ??
    new Set();

  return (
    <Box
      sx={{
        width: 1 / 5,
        border: 1,
        height: "100%",
        p: 1,
      }}
    >
      <Box sx={{ height: "100%", overflow: "auto", p: 1 }}>
        {data.map((stock) => (
          <StockListRecord
            key={stock.symbol}
            stock={stock}
            isBookmarked={bookmarks.has(stock.symbol)}
            onToggleBookmark={(symbol) =>
              bookmarks.has(symbol)
                ? facade.removeBookmark(symbol)
                : facade.addBookmark(symbol)
            }
          />
        ))}
      </Box>
    </Box>
  );
};
