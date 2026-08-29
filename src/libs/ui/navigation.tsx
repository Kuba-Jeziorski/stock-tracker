import { Box, Link as MuiLink, Typography } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Link as RouterLink } from "react-router";

import { COMPARE_LABEL, COMPARE_URL } from "../../constants/constants";
import { SearchContainer } from "../../features/search/presentation/search-container";

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
      <MuiLink
        component={RouterLink}
        to="/"
        sx={{ maxWidth: 200, display: "flex", flexShrink: 0 }}
      >
        <img src="/logo.svg" alt="logo" style={{ width: "100%" }} />
      </MuiLink>
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchContainer />
      </Box>
      <MuiLink
        component={RouterLink}
        to={`/${COMPARE_URL}`}
        sx={{
          textDecoration: "none",
          color: "custom.text.secondary",
          backgroundColor: "custom.background.navy",
          textTransform: "capitalize",
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
          gap: 2,
          border: 1,
          borderColor: "custom.background.light",
          borderRadius: 8,
          paddingX: 4,
          paddingY: 2,
          transition: "color 0.3s, background-color 0.3s",
          "&:hover": {
            color: "custom.text.navy",
            backgroundColor: "custom.background.light",
          },
        }}
      >
        <CompareArrowsIcon />
        <Typography>{COMPARE_LABEL}</Typography>
      </MuiLink>
    </Box>
  );
};
