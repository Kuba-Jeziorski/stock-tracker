import { Stack, Typography, Link } from "@mui/material";
import { dateFormatter } from "../core/date-formatter";
import type { StockSingleNews } from "../domain/model";

type Props = {
  singleNews: StockSingleNews;
};

export const NewsBoxItem = ({ singleNews }: Props) => {
  return (
    <Stack key={singleNews.headline}>
      <Stack
        direction="row"
        sx={{
          width: 1,
          alignItems: "center",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            textDecoration: "none",
            fontSize: 12,
            color: "custom.text.secondary",
            backgroundColor: "custom.background.navy",
            textTransform: "capitalize",
            display: "flex",
            alignItems: "center",
            gap: 2,
            border: 1,
            borderColor: "custom.background.navy",
            borderRadius: 8,
            paddingX: 2,
            paddingY: 1,
            marginBottom: 2,
          }}
        >
          {singleNews.category}
        </Typography>
        <Typography>{dateFormatter(1000 * singleNews.datetime)}</Typography>
      </Stack>
      <Typography
        variant="h3"
        sx={{
          display: "flex",
          fontSize: 24,

          fontWeight: 600,
          marginBottom: 2,
        }}
      >
        <Link
          href={singleNews.url}
          sx={{
            textDecoration: "none",
            color: "custom.text.navy",
            transition: "filter 0.3s",
            "&:hover": {
              filter: "brightness(1.8)",
            },
          }}
        >
          {singleNews.headline}
        </Link>
      </Typography>
      <Typography>{singleNews.summary}</Typography>
    </Stack>
  );
};
