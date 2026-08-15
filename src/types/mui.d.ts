import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      navy: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      navy?: string;
    };
  }
}
