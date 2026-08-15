import { Box, Link } from "@mui/material";

export const Navigation = () => {
  return (
    <Box
      sx={{
        p: 4,
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        backgroundColor: "custom.navy",
      }}
    >
      <Link href="#" sx={{ maxWidth: 200, display: "flex" }}>
        <img src="/logo.svg" alt="logo" style={{ width: "100%" }} />
      </Link>
      {/* search input */}
      <Link
        href="/compare"
        sx={{ textDecoration: "none", color: "custom.light" }}
      >
        Compare
      </Link>
    </Box>
  );
};
