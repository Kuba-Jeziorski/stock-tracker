import {
  Skeleton,
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { getStockByTicker } from "../../overview-bar/core/get-stock-by-ticker";
import { useQuote } from "../../../libs/utils/integration/quote/use-quote";
import { useStat } from "../../../libs/utils/integration/stat/use-stat";
import type { StockTicker } from "../../../types/stock";
import { rows } from "../core/rows";
import { createColumn } from "../core/create-column";
import { Link as RouterLink } from "react-router";
import { marketCapitalizationFormatter } from "../../../shared/formatters/market-capitalization-formatter";
import { getChangeColor } from "../../../shared/formatters/get-change-color";
import { significantFiguresFormatter } from "../../../shared/formatters/significant-figures-formatter";

type Props = {
  firstTicker: StockTicker;
  secondTicker: StockTicker;
};

const tableContainerSx: SxProps<Theme> = {
  marginTop: 4,
  borderRadius: 4,
  overflow: "hidden",
  border: 1,
  borderColor: "custom.table.background",
  backgroundColor: "transparent",
  boxShadow: "none",
};

const cellSx: SxProps<Theme> = {
  paddingX: 4,
  paddingY: 2,
  width: 1 / 3,
  fontSize: "1rem",
  color: "custom.text.primary",
  borderBottom: 1,
  borderColor: "custom.table.separator",
};

const headCellSx: SxProps<Theme> = {
  ...cellSx,
  fontWeight: 400,
  backgroundColor: "custom.table.background",
};

const labelCellSx: SxProps<Theme> = {
  ...cellSx,
  fontWeight: 600,
};

const bodyRowSx: SxProps<Theme> = {
  backgroundColor: "transparent",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "custom.table.background",
  },
};

export const ComparisonTable = ({ firstTicker, secondTicker }: Props) => {
  const firstStock = getStockByTicker(firstTicker);
  const secondStock = getStockByTicker(secondTicker);

  const {
    quote: firstQuote,
    error: firstQuoteError,
    isFetching: isFirstQuoteFetching,
  } = useQuote(firstTicker);

  const {
    quote: secondQuote,
    error: secondQuoteError,
    isFetching: isSecondQuoteFetching,
  } = useQuote(secondTicker);

  const {
    stat: firstStat,
    error: firstStatError,
    isFetching: isFirstStatFetching,
  } = useStat(firstTicker);

  const {
    stat: secondStat,
    error: secondStatError,
    isFetching: isSecondStatFetching,
  } = useStat(secondTicker);

  if (
    firstQuoteError ||
    secondQuoteError ||
    firstStatError ||
    secondStatError
  ) {
    return <Typography>There was an error</Typography>;
  }

  const isInitialLoading =
    (isFirstQuoteFetching && !firstQuote) ||
    (isSecondQuoteFetching && !secondQuote) ||
    (isFirstStatFetching && !firstStat) ||
    (isSecondStatFetching && !secondStat);

  if (
    isInitialLoading ||
    !firstQuote ||
    !secondQuote ||
    !firstStat ||
    !secondStat
  ) {
    return (
      <Skeleton
        variant="rectangular"
        height={400}
        sx={{ marginTop: 4, borderRadius: 4 }}
      />
    );
  }

  const columns = [
    createColumn({
      name: firstStock?.name ?? "",
      ticker: firstTicker,
      country: firstStat.country,
      ipo: firstStat.ipo,
      marketCapitalization: marketCapitalizationFormatter(
        firstStat.marketCapitalization,
      ),
      industry: firstStock?.sector ?? "",
      currentPrice: `$${firstQuote.price}`,
      change: firstQuote.change,
    }),
    createColumn({
      name: secondStock?.name ?? "",
      ticker: secondTicker,
      country: secondStat.country,
      ipo: secondStat.ipo,
      marketCapitalization: marketCapitalizationFormatter(
        secondStat.marketCapitalization,
      ),
      industry: secondStock?.sector ?? "",
      currentPrice: `$${secondQuote.price}`,
      change: secondQuote.change,
    }),
  ];

  return (
    <TableContainer sx={tableContainerSx}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={headCellSx} />
            <TableCell sx={headCellSx}>
              {firstStock?.name ?? firstTicker} ({firstTicker})
            </TableCell>
            <TableCell sx={headCellSx}>
              {secondStock?.name ?? secondTicker} ({secondTicker})
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow key={row.key} sx={bodyRowSx}>
                {row.key === "change" ? (
                  <>
                    <TableCell sx={labelCellSx}>{row.label}</TableCell>
                    <TableCell
                      sx={[
                        cellSx,
                        { color: getChangeColor(columns[0].change) },
                      ]}
                    >
                      {significantFiguresFormatter(columns[0][row.key], 3)}%
                    </TableCell>
                    <TableCell
                      sx={[
                        cellSx,
                        { color: getChangeColor(columns[1].change) },
                      ]}
                    >
                      {significantFiguresFormatter(columns[1][row.key], 3)}%
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell sx={labelCellSx}>{row.label}</TableCell>
                    <TableCell sx={cellSx}>{columns[0][row.key]}</TableCell>
                    <TableCell sx={cellSx}>{columns[1][row.key]}</TableCell>
                  </>
                )}
              </TableRow>
            );
          })}
          <TableCell sx={cellSx} />
          <TableCell sx={cellSx}>
            <MuiLink
              component={RouterLink}
              to={`/${columns[0].ticker}`}
              sx={{
                textDecoration: "none",
                color: "custom.text.primary",
                fontWeight: 600,
                transition: "color 0.3s",
                "&:hover": {
                  color: "custom.text.navy",
                },
              }}
            >
              Zobacz więcej
            </MuiLink>
          </TableCell>
          <TableCell sx={cellSx}>
            <MuiLink
              component={RouterLink}
              to={`/${columns[1].ticker}`}
              sx={{
                textDecoration: "none",
                color: "custom.text.primary",
                fontWeight: 600,
                transition: "color 0.3s",
                "&:hover": {
                  color: "custom.text.navy",
                },
              }}
            >
              Zobacz więcej
            </MuiLink>
          </TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
