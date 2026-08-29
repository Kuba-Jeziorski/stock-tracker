import { Divider, Stack } from "@mui/material";
import type { Detail, OverviewBarVariant } from "../domain/model";
import { OverviewBarItem } from "./overview-bar-item";

type Props = {
  details: Detail[];
  variant?: OverviewBarVariant;
};

export const OverviewBar = ({ details, variant = "standard" }: Props) => {
  return (
    <Stack
      direction="row"
      divider={
        variant === "standard" ? (
          <Divider
            flexItem
            sx={{
              width: "1px",
              backgroundColor: "custom.table.separator",
            }}
          />
        ) : undefined
      }
      sx={{
        width: 1,
        alignItems: "stretch",
        justifyContent: "space-between",
        gap: 2,
        backgroundColor: "custom.background.light",
        overflow: "hidden",
        color: "custom.text.primary",
        borderRadius: 8,
      }}
    >
      {details.map((detail, index) => {
        return (
          <OverviewBarItem
            key={`${index}-${detail.label}`}
            detail={detail}
            variant={variant}
          />
        );
      })}
    </Stack>
  );
};
