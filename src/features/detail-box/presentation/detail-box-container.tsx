import { Stack, Typography } from "@mui/material";
import type { StockSingleNews } from "../domain/model";
import { NewsBox } from "./news-box";

type Props = {
  news: StockSingleNews[];
};

export const DetailBoxContainer = ({ news }: Props) => {
  return (
    <Stack
      direction="column"
      sx={{
        width: 1,
        gap: 2,
        backgroundColor: "custom.background.light",
        color: "custom.text.primary",
        borderRadius: 8,
        paddingX: 4,
        paddingY: 2,
      }}
    >
      <Typography variant="h2" sx={{ fontSize: 32 }}>
        News
      </Typography>
      <NewsBox news={news} />
    </Stack>
  );
};
