import { Box } from "@mui/material";
import { useState } from "react";
import companiesJSON from "./../../assets/data/sp500.json";
import { StockListRecord } from "./stock-list-record";
import type { Company } from "../types/company";
import { useObservable } from "../../handlers/use-observable";
import { facade } from "../../handlers/facade";

export const StockList = () => {
  const [data, setData] = useState<Company[]>(companiesJSON.companies);

  const bookmarks = useObservable(
    facade.getBookmarks,
    facade.getBookmarks.getValue(),
  );

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
        {data.map((company) => (
          <StockListRecord
            key={company.symbol}
            company={company}
            isBookmarked={bookmarks?.has(company.symbol)}
            onToggleBookmark={(symbol) =>
              bookmarks?.has(symbol)
                ? facade.removeBookmark(symbol)
                : facade.addBookmark(symbol)
            }
          />
        ))}
      </Box>
    </Box>
  );
};
