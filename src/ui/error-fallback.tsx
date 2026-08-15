import type { FallbackProps } from "react-error-boundary";
import { SOMETHING_WENT_WRONG, TRY_AGAIN } from "../constants/constants";
import { Button } from "@mui/material";

export const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col gap-3">
        <h1>{SOMETHING_WENT_WRONG}</h1>
        <p>{error instanceof Error ? error.message : ""}</p>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "custom.background.navy",
            color: "custom.text.secondary",
          }}
          onClick={resetErrorBoundary}
        >
          {TRY_AGAIN}
        </Button>
      </div>
    </div>
  );
};
