import { Autocomplete, TextField } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import { stocks } from "../../../constants/stocks/stocks";
import { useNavigate } from "react-router";
import { useState } from "react";
import type { Stock } from "../../../types/stock";

const autocompleteSx: SxProps<Theme> = {
  width: 1,
  maxWidth: 560,
  "& .MuiOutlinedInput-root": {
    color: "custom.text.secondary",
    "& fieldset": {
      borderColor: "custom.background.light",
    },
    "&:hover fieldset": {
      borderColor: "custom.background.light",
    },
    "&.Mui-focused fieldset": {
      borderColor: "custom.background.light",
      borderWidth: 1,
    },
  },
  "& .MuiOutlinedInput-input": {
    color: "custom.text.secondary",
    "&::placeholder": {
      color: "custom.text.secondary",
      opacity: 0.6,
    },
  },
  "& .MuiAutocomplete-popupIndicator, & .MuiAutocomplete-clearIndicator": {
    color: "custom.text.secondary",
  },
};

export const SearchContainer = () => {
  // selected Stock
  const [value, setValue] = useState<Stock | null>(null);
  // string passed to the input
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  return (
    <Autocomplete
      fullWidth
      options={stocks}
      value={value}
      inputValue={inputValue}
      getOptionLabel={(stock) => `${stock.name} (${stock.ticker})`}
      isOptionEqualToValue={(option, value) => option.ticker === value.ticker}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
      }}
      onChange={(_, stock) => {
        setValue(null);
        setInputValue("");
        navigate(`/${stock?.ticker}`);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Find stock"
          slotProps={{
            ...params.slotProps,
            htmlInput: {
              ...params.slotProps.htmlInput,
              "aria-label": "Find stock",
            },
          }}
        />
      )}
      sx={autocompleteSx}
    />
  );
};
