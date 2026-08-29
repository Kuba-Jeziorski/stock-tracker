import {
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import type { StockTicker } from "../../../types/stock";
import { rows } from "../core/rows";
import { createColumn } from "../core/create-column";

type Props = {
  firstTicker: StockTicker;
  secondTicker: StockTicker;
};

const dummyColumns = [
  createColumn({
    name: "name 1",
    ticker: "ticker 1",
    country: "country 1",
    ipo: "ipo 1",
    marketCapitalization: 1,
    industry: "industry 1",
    currentPrice: 1,
    change: 1,
  }),
  createColumn({
    name: "name 2",
    ticker: "ticker 2",
    country: "country 2",
    ipo: "ipo 2",
    marketCapitalization: 2,
    industry: "industry 2",
    currentPrice: 2,
    change: 2,
  }),
];

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
  return (
    <TableContainer sx={tableContainerSx}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={headCellSx} />
            <TableCell sx={headCellSx}>
              FIRST_STOCK_NAME ({firstTicker})
            </TableCell>
            <TableCell sx={headCellSx}>
              SECOND_STOCK_NAME ({secondTicker})
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow key={row.key} sx={bodyRowSx}>
                <TableCell sx={labelCellSx}>{row.label}</TableCell>
                <TableCell sx={cellSx}>{dummyColumns[0][row.key]}</TableCell>
                <TableCell sx={cellSx}>{dummyColumns[1][row.key]}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
