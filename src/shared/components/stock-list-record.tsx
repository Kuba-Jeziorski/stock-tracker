import { Box, Typography } from "@mui/material";
import type { Stock, StockSymbol } from "../types/stock";
import { Bookmark } from "../../features/bookmarks/bookmark";

type StockListRecordProps = {
  stock: Stock;
  isBookmarked: boolean;
  onToggleBookmark: (symbol: StockSymbol) => void;
};

export const StockListRecord = ({
  stock,
  isBookmarked,
  onToggleBookmark,
}: StockListRecordProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        borderBottom: 1,
        borderColor: "#C5C5C5",
        pb: 1,
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Typography
          sx={{
            cursor: "pointer",
            fontWeight: "600",
            width: "fit-content",
            transition: "all",
            transitionDuration: "300ms",
            "&:hover": { color: "#0094F7" },
          }}
        >
          {stock.name}
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "#C5C5C5" }}>
          [{stock.symbol}]
        </Typography>
      </Box>
      <Bookmark
        isBookmarked={isBookmarked}
        symbol={stock.symbol}
        onToggleBookmark={onToggleBookmark}
      />
    </Box>
  );
};
