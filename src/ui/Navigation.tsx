import { Box, Link, Typography } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import { COMPARE_LABEL, COMPARE_URL } from "../constants/constants";

export const Navigation = () => {
  return (
    <Box
      sx={{
        p: 4,
        width: 1,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        backgroundColor: "custom.background.navy",
      }}
    >
      <Link href="/" sx={{ maxWidth: 200, display: "flex" }}>
        <img src="/logo.svg" alt="logo" style={{ width: "100%" }} />
      </Link>
      {/* search input */}
      <Link
        href={`/${COMPARE_URL}`}
        sx={{
          textDecoration: "none",
          color: "custom.text.secondary",
          textTransform: "capitalize",
          display: "flex",
          alignItems: "center",
          gap: 2,
          border: 1,
          borderColor: "custom.background.light",
          borderRadius: 8,
          paddingX: 4,
          paddingY: 2,
          transition: "all 0.3s",
          "&:hover": {
            color: "custom.text.navy",
            backgroundColor: "custom.background.light",
          },
        }}
      >
        <CompareArrowsIcon />
        <Typography>{COMPARE_LABEL}</Typography>
      </Link>
    </Box>
  );
};
