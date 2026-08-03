import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

type Bookmark = {
  isBookmarked: undefined | boolean;
  symbol: string;
  handleBookmark: (symbol: string) => void;
};

export const Bookmark = ({
  isBookmarked,
  symbol,
  handleBookmark,
}: Bookmark) => {
  return isBookmarked ? (
    <BookmarkIcon
      fontSize="medium"
      sx={{ cursor: "pointer", color: "#0094f7" }}
      onClick={() => handleBookmark(symbol)}
    />
  ) : (
    <BookmarkBorderIcon
      fontSize="medium"
      sx={{ cursor: "pointer" }}
      onClick={() => handleBookmark(symbol)}
    />
  );
};
