import { Stack } from "@mui/material";
import { useSearchParams } from "react-router";
import { ComparisonAutocompleteContainer } from "./comparison-autocomplete-container";
import { ComparisonTable } from "./comparison-table";

export const ComparisonContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const firstTicker = searchParams.get("firstStock") ?? "";
  const secondTicker = searchParams.get("secondStock") ?? "";
  const areTickersSelected = firstTicker && secondTicker;

  return (
    <Stack direction="column" sx={{ gap: 2 }}>
      <ComparisonAutocompleteContainer
        firstTicker={firstTicker}
        secondTicker={secondTicker}
        setSearchParams={setSearchParams}
      />
      {areTickersSelected && (
        <ComparisonTable
          firstTicker={firstTicker}
          secondTicker={secondTicker}
        />
      )}
    </Stack>
  );
};
