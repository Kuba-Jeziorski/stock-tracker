import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomPalette {
    text: {
      primary: string;
      secondary: string;
      navy: string;
    };
    background: {
      default: string;
      dark: string;
      light: string;
      navy: string;
    };
    table: {
      background: string;
      separator: string;
    };
    button: {
      disabledText: string;
    };
    brand: {
      navy: string;
    };
    status: {
      positive: string;
      negative: string;
    };
  }

  interface Palette {
    custom: CustomPalette;
  }

  interface PaletteOptions {
    custom?: {
      text?: {
        primary?: string;
        secondary?: string;
        navy?: string;
      };
      background?: {
        default?: string;
        dark?: string;
        light?: string;
        navy?: string;
      };
      table?: {
        background?: string;
        separator?: string;
      };
      button?: {
        disabledText?: string;
      };
      brand?: {
        navy?: string;
      };
      status?: {
        positive?: string;
        negative?: string;
      };
    };
  }
}
