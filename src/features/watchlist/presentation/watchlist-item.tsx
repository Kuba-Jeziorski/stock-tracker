import {
  Box,
  Typography,
  Link as MuiLink,
  Skeleton,
  Stack,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import type { WatchlistItemProps } from "../domain/model";
import { Link as RouterLink } from "react-router";
import type { SxProps, Theme } from "@mui/material/styles";
import { getChangeColor } from "../../../shared/formatters/get-change-color";
import { significantFiguresFormatter } from "../../../shared/formatters/significant-figures-formatter";

type Props = {
  item: WatchlistItemProps;
  isFetching: boolean;
};

const linkSx: SxProps<Theme> = {
  display: "flex",
  textDecoration: "none",
  flexDirection: "column",
  gap: 1,
  p: 2,
  color: "custom.text.primary",
  border: 1,
  borderColor: "custom.table.separator",
  borderRadius: 4,
  aspectRatio: 1,
  backgroundColor: "custom.background.light",
  transition: "color 0.3s, background-color 0.3s",
  "&:hover": {
    backgroundColor: "custom.table.background",
  },
};

const tickerSx: SxProps<Theme> = {
  display: "block",
  width: 1,
  fontWeight: 600,
};

const nameSx: SxProps<Theme> = {
  display: "block",
  width: 1,
};

const priceSx: SxProps<Theme> = {
  display: "block",
  width: 1,
  fontWeight: 600,
};

const changeBaseSx: SxProps<Theme> = {
  display: "block",
  width: 1,
  fontWeight: 600,
};

export const WatchlistItem = ({ item, isFetching }: Props) => {
  console.log(isFetching);

  return (
    <>
      {isFetching ? (
        <Skeleton
          variant="rectangular"
          animation="pulse"
          width={258}
          height={258}
          sx={{ borderRadius: 4 }}
        />
      ) : (
        <MuiLink
          component={RouterLink}
          to={`/${item.ticker}`}
          key={item.ticker}
          sx={linkSx}
        >
          <Stack direction="row" sx={{ alignItems: "center", gap: 1 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={tickerSx}>{item.ticker}</Typography>
              <Typography sx={nameSx}>{item.name}</Typography>
            </Box>

            <StarIcon
              sx={{
                width: 24,
                fontSize: 24,
                color: "custom.status.favorite",
              }}
            />
          </Stack>
          <Typography noWrap sx={priceSx}>
            {item.price === null ? "N/A" : `$${item.price}`}
          </Typography>
          <Typography
            noWrap
            sx={[changeBaseSx, { color: getChangeColor(item.change) }]}
          >
            {item.change == null
              ? "N/A"
              : `${significantFiguresFormatter(item.change, 3)}%`}
          </Typography>
          {item.logo && <img src={item.logo} width="32" height="32" />}
        </MuiLink>
      )}
    </>
  );
};
