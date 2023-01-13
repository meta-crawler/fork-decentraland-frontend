import React from "react";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeText {
    third?: string;
    footer?: string;
  }
  interface TypeBackground {
    main?: string;
    transparent?: string;
  }
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = createTheme({
    palette: {
      background: {
        main: "#FF2D55",
        default: "#FFF",
        paper: "#19131A",
        transparent: "transparent",
      },
      text: {
        primary: "#FFF",
        secondary: "#FF2D55",
        third: "#16141A",
        footer: "#676370",
      },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
