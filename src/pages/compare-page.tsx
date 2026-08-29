import { ComparisonContainer } from "../features/stock-comparison/presentation/comparison-container";
import { useTabTitle } from "../libs/utils/use-tab-title";
import { Stack, Typography } from "@mui/material";

export const ComparePage = () => {
  useTabTitle("Compare");

  return (
    <Stack direction="column" sx={{ gap: 4 }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: 32,
        }}
      >
        Compare stocks
      </Typography>

      <ComparisonContainer />
    </Stack>
  );
};
