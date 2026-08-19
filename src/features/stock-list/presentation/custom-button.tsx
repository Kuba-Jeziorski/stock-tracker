import { Button as MuiButton, type ButtonProps } from "@mui/material";

type Props = ButtonProps;

export const CustomButton = ({ sx, children, ...props }: Props) => {
  return (
    <MuiButton
      {...props}
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
        transition: "all 0.3s",
        "&:hover": {
          color: "custom.text.navy",
          backgroundColor: "custom.background.light",
        },
        "&:disabled": {
          borderColor: "custom.button.disabledText",
        },
        ...sx,
      }}
      variant="contained"
    >
      {children}
    </MuiButton>
  );
};
