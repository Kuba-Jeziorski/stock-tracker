import { Stack } from "@mui/material";
import { NewsBoxItem } from "./news-box-item";
import type { StockSingleNews } from "../domain/model";

type Props = {
  news: StockSingleNews[];
};

export const NewsBox = ({ news }: Props) => {
  return (
    <Stack
      direction="column"
      sx={{
        gap: 2,
        "& > *:not(:first-of-type)": {
          paddingTop: 2,
          borderTop: "1px solid",
          borderColor: "custom.table.separator",
        },
      }}
    >
      {news.map((singleNews) => (
        <NewsBoxItem key={singleNews.headline} singleNews={singleNews} />
      ))}
    </Stack>
  );
};
