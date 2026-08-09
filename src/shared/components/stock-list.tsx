import { Box } from "@mui/material";
import companiesJSON from "./../../assets/data/sp500.json";
import { StockListRecord } from "./stock-list-record";
import { useObservable } from "../../handlers/use-observable";
import { facade } from "../../handlers/facade";

export const StockList = () => {
  const bookmarks =
    useObservable(facade.getBookmarks, facade.getBookmarks.getValue()) ??
    new Set();

  const isBookmarkedOnly =
    useObservable(
      facade.getBookmarkedOnly,
      facade.getBookmarkedOnly.getValue(),
    ) ?? false;

  const searchedString = useObservable(facade.getSearchedString) ?? "";

  const allStocks = companiesJSON.companies;

  let data = allStocks;

  if (isBookmarkedOnly) {
    data = allStocks.filter((stock) => bookmarks.has(stock.symbol));
  }

  if (searchedString.length) {
    const query = searchedString.toLowerCase();

    data = data.filter(
      ({ name, symbol }) =>
        name.toLowerCase().startsWith(query) ||
        symbol.toLowerCase().startsWith(query),
    );
  }
  // filter
  // sort

  return (
    <Box
      sx={{
        width: 1 / 5,
        border: 1,
        height: 1,
        p: 1,
      }}
    >
      <Box sx={{ height: 1, overflow: "auto", p: 1 }}>
        {data.length
          ? data.map((stock) => (
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
            ))
          : "No records"}
      </Box>
    </Box>
  );
};
