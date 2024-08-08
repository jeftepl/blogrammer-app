"use client";

import {
  ThemeProvider as StyledThemeProvider,
  useTheme as useThemeStyled,
} from "styled-components";
import theme, { Theme } from "./theme";

export function useTheme(): Theme {
  return useThemeStyled() as Theme;
}

type ThemeProviderProps = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}
