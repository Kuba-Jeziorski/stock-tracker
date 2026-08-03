import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import type { StockSymbol } from "../../shared/types/stock";

type BookmarkProps = {
  isBookmarked: boolean;
  symbol: StockSymbol;
  onToggleBookmark: (symbol: StockSymbol) => void;
};

export const Bookmark = ({
  isBookmarked,
  symbol,
  onToggleBookmark,
}: BookmarkProps) => {
  return isBookmarked ? (
    <BookmarkIcon
      fontSize="medium"
      sx={{ cursor: "pointer", color: "#0094f7" }}
      onClick={() => onToggleBookmark(symbol)}
    />
  ) : (
    <BookmarkBorderIcon
      fontSize="medium"
      sx={{ cursor: "pointer" }}
      onClick={() => onToggleBookmark(symbol)}
    />
  );
};
