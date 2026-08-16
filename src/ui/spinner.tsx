import { Box } from "@mui/material";

export const Spinner = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "custom.background.light",
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          border: "4px solid",
          borderColor: "primary.background.navy",
          borderTopColor: "transparent",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          "@keyframes spin": {
            from: {
              transform: "rotate(0deg)",
            },
            to: {
              transform: "rotate(360deg)",
            },
          },
        }}
      ></Box>
    </Box>
  );
};
