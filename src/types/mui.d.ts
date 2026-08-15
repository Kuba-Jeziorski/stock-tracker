import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      dark: string;
      gray: string;
      light: string;
      navy: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      dark?: string;
      gray?: string;
      light?: string;
      navy?: string;
    };
  }
}
