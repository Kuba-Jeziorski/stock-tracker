import { Box, TextField, Link } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";

export const Menu = () => {
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
    </Box>
  );
};
