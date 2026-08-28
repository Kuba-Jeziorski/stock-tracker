import { Stack } from "@mui/material";
import type { StockSingleNews } from "../domain/model";

type Props = {
  news: StockSingleNews[];
};

export const NewsBoxContainer = ({ news }: Props) => {
  console.log(news);

  return (
    <Stack
      direction="column"
      sx={{
        width: 1,
        gap: 2,
        backgroundColor: "custom.background.light",
        color: "custom.text.primary",
        borderRadius: 8,
      }}
    >
      {news.map((singleNews) => {
        return <p>{singleNews.headline}</p>;
      })}
    </Stack>
  );
};
