import { Box, TextField, Link } from "@mui/material";

export const Menu = () => {
  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
        sx={{ flex: 1, maxWidth: 1 / 2 }}
      ></TextField>
    </Box>
  );
};
