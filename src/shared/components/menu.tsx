import { useState, type ChangeEvent } from "react";

import { Box, TextField, Link } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";

import { facade } from "../../handlers/facade";
import { useObservable } from "../../handlers/use-observable";

export const Menu = () => {
  const [isBookmarkActive, setIsBookmarkActive] = useState(false);

  const { setBookmarkedOnly, setSearchedString } = facade;

  const searchedValue =
    useObservable(
      facade.getSearchedStringRaw,
      facade.getSearchedStringRaw.getValue(),
    ) ?? "";

  const handleIsBookmarkActive = () => {
    const next = !isBookmarkActive;
    setIsBookmarkActive(() => next);
    setBookmarkedOnly(next);
  };

  const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    setSearchedString(next);
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
        <img src="/lorem-logo.svg" alt="" style={{ width: 1 }} />
      </Link>
      <TextField
        id="search-bar"
        label="Search stock"
        variant="outlined"
        value={searchedValue}
        sx={{ flex: 1, maxWidth: 1 / 2, ml: "auto" }}
        onChange={handleSearchQuery}
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
