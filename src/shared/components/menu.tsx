import { useState } from "react";

import { Box, TextField, Link } from "@mui/material";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import { facade } from "../../handlers/facade";

export const Menu = () => {
  const { setBookmarkedOnly } = facade;

  const [isBookmarkActive, setIsBookmarkActive] = useState(false);

  const handleIsBookmarkActive = () => {
    const next = !isBookmarkActive;
    setIsBookmarkActive(() => next);
    setBookmarkedOnly(next);
  };

  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        alignItems: "center",
        gap: 8,
        border: 1,
      }}
    >
      <Link href="#" sx={{ maxWidth: 200, display: "flex" }}>
        <img src="/lorem-logo.svg" alt="" style={{ width: "100%" }} />
      </Link>
      <TextField
        id="search-bar"
        label="Search stock"
        variant="outlined"
        sx={{ flex: 1, maxWidth: 1 / 2, ml: "auto" }}
      ></TextField>
      <FilterAltIcon fontSize="medium" sx={{ cursor: "pointer" }} />
      <SortIcon fontSize="medium" sx={{ cursor: "pointer" }} />
      <BookmarkIcon
        fontSize="medium"
        sx={{
          cursor: "pointer",
          color: isBookmarkActive ? "#0094f7" : "inherit",
        }}
        onClick={() => handleIsBookmarkActive()}
      />
    </Box>
  );
};
