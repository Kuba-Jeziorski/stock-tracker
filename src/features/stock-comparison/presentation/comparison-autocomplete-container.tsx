import { Autocomplete, Divider, Stack, TextField } from "@mui/material";
import { stocks } from "../../../constants/stocks/stocks";
import type { StockTicker } from "../../../types/stock";
import type { SetURLSearchParams } from "react-router";

type Props = {
  firstTicker: StockTicker;
  secondTicker: StockTicker;
  setSearchParams: SetURLSearchParams;
};

export const ComparisonAutocompleteContainer = ({
  firstTicker,
  secondTicker,
  setSearchParams,
}: Props) => {
  return (
    <Stack
      direction="row"
      divider={
        <Divider
          flexItem
          sx={{
            width: "1px",
            backgroundColor: "custom.table.separator",
          }}
        />
      }
      sx={{
        height: "50px",
        gap: 3,
        justifyContent: "space-between",
      }}
    >
      <Autocomplete
        fullWidth
        options={stocks}
        value={stocks.find((stock) => stock.ticker === firstTicker) ?? null}
        getOptionLabel={(stock) => `${stock.name} (${stock.ticker})`}
        isOptionEqualToValue={(option, value) => option.ticker === value.ticker}
        getOptionDisabled={(stock) => stock.ticker === secondTicker}
        onChange={(_, stock) => {
          setSearchParams((params) => {
            if (stock) {
              params.set("firstStock", stock.ticker);
            } else {
              params.delete("firstStock");
            }
            return params;
          });
        }}
        renderInput={(params) => <TextField {...params} label="First stock" />}
      />
      <Autocomplete
        fullWidth
        options={stocks}
        value={stocks.find((stock) => stock.ticker === secondTicker) ?? null}
        getOptionLabel={(stock) => `${stock.name} (${stock.ticker})`}
        isOptionEqualToValue={(option, value) => option.ticker === value.ticker}
        getOptionDisabled={(stock) => stock.ticker === firstTicker}
        onChange={(_, stock) => {
          setSearchParams((params) => {
            if (stock) {
              params.set("secondStock", stock.ticker);
            } else {
              params.delete("secondStock");
            }
            return params;
          });
        }}
        renderInput={(params) => <TextField {...params} label="Second stock" />}
      />
    </Stack>
  );
};
