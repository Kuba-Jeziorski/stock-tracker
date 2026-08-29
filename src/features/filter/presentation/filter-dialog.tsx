import { useEffect, useState, type SetStateAction } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SECTORS } from "../../../constants/stocks/sectors";
import type { Filter } from "../../../types/filter";
import { initialFilter } from "../../../shared/filter/initial-filter";
import { useSearchParams } from "react-router";

type FilterDialogProps = {
  open: boolean;
  onClose: () => void;
  filter: Filter;
  setFilter: React.Dispatch<SetStateAction<Filter>>;
};

export const FilterDialog = ({
  open,
  onClose,
  filter,
  setFilter,
}: FilterDialogProps) => {
  const [localFilter, setLocalFilter] = useState<Filter>(filter);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const handleLocalFilter = () => {
      setLocalFilter(filter);
    };

    if (open) {
      handleLocalFilter();
    }
  }, [open, filter]);

  const handleApply = () => {
    setFilter(localFilter);
    searchParams.delete("page");
    setSearchParams(searchParams);
    onClose();
  };

  const handleReset = () => {
    setLocalFilter(initialFilter);
  };

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <Box
        sx={{
          px: 3,
          py: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <DialogTitle sx={{ p: 0 }}>Filters</DialogTitle>
        <DialogContent sx={{ p: 0 }}>
          <Stack direction="column" sx={{ gap: 3 }}>
            {/* Sectors */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography sx={{ whiteSpace: "nowrap" }}>
                Set sectors:
              </Typography>
              <Autocomplete
                multiple
                fullWidth
                options={SECTORS}
                value={localFilter.selectedSectors}
                getOptionLabel={(sector) => sector}
                isOptionEqualToValue={(option, value) => option === value}
                onChange={(_, newValue) => {
                  setLocalFilter((prev) => ({
                    ...prev,
                    selectedSectors: newValue,
                  }));
                }}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Set sectors..." />
                )}
              />
            </Box>
            {/* Other filters - each filter is a <Box></Box> */}
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 0, justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              sx={{
                textDecoration: "none",
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
                transition: "color 0.3s, background-color 0.3s",
                "&:hover": {
                  color: "custom.text.navy",
                  backgroundColor: "custom.background.light",
                },
                "&:disabled": {
                  borderColor: "custom.button.disabledText",
                },
              }}
              variant="contained"
              onClick={handleApply}
            >
              Apply Filters
            </Button>
          </Box>
          <Button onClick={handleReset}>Reset</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
