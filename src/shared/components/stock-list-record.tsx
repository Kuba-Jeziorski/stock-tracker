import { Box, Typography } from "@mui/material";
import type { Company } from "../types/company";
import { Bookmark } from "../../features/bookmarks/bookmark";

type StockRecord = {
  company: Company;
  isBookmarked: undefined | boolean;
  onToggleBookmark: (symbol: string) => void;
};

export const StockListRecord = ({
  company,
  isBookmarked,
  onToggleBookmark,
}: StockRecord) => {
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
          {company.name}
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "#C5C5C5" }}>
          [{company.symbol}]
        </Typography>
      </Box>
      <Bookmark
        isBookmarked={isBookmarked}
        symbol={company.symbol}
        handleBookmark={onToggleBookmark}
      />
    </Box>
  );
};
