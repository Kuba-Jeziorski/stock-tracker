import { Stack, Typography } from "@mui/material";
import type { Detail, OverviewBarVariant } from "../domain/model";
import { getTextColor } from "../core/get-text-color";
import { detailValueFormatter } from "../core/detail-value-formatter";

const variantFontSize: Record<
  OverviewBarVariant,
  { label: string; value: string }
> = {
  large: {
    label: "14px",
    value: "18px",
  },
  standard: {
    label: "12px",
    value: "14px",
  },
};

type Props = {
  detail: Detail;
  variant: OverviewBarVariant;
};

export const OverviewBarItem = ({ detail, variant = "standard" }: Props) => {
  const fontSize = variantFontSize[variant];

  const isValidDetail = detail.label && detail.value !== null ? true : false;

  return (
    isValidDetail && (
      <Stack
        direction="column"
        sx={{
          width: 1,
          gap: 1,
          paddingY: 2,
          paddingX: 4,
          alignItems: "center",
        }}
      >
        <>
          <Typography
            noWrap
            sx={{
              display: "block",
              fontSize: fontSize.label,
            }}
          >
            {detail.label}
          </Typography>
          <Typography
            noWrap
            sx={{
              display: "block",
              fontWeight: 600,
              fontSize: fontSize.value,
              color: (theme) => getTextColor(detail, theme),
            }}
          >
            {detailValueFormatter(detail)}
          </Typography>
        </>
      </Stack>
    )
  );
};
