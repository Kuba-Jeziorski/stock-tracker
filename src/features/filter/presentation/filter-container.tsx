import { Box, Button, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useState, type SetStateAction } from "react";
import { FilterDialog } from "./filter-dialog";
import type { Filter } from "../../../types/filter";

type Props = {
  filter: Filter;
  setFilter: React.Dispatch<SetStateAction<Filter>>;
};

export const FilterContainer = ({ filter, setFilter }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        onClick={handleClickOpen}
        sx={{
          textDecoration: "none",
          color: "custom.text.secondary",
          backgroundColor: "custom.background.navy",
          textTransform: "capitalize",
          display: "flex",
          alignItems: "center",
          flexShrink: 0,
          gap: 2,
          border: 1,
          borderColor: "custom.background.navy",
          borderRadius: 8,
          paddingX: 4,
          paddingY: 2,
          transition: "color 0.3s, background-color 0.3s",
          "&:hover": {
            color: "custom.text.navy",
            backgroundColor: "custom.background.light",
          },
        }}
      >
        <FilterAltIcon />
        <Typography sx={{ p: 0 }}>Filters</Typography>
      </Button>
      <FilterDialog
        open={open}
        onClose={handleClose}
        filter={filter}
        setFilter={setFilter}
      />
    </Box>
  );
};
