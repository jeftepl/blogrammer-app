"use client";

import theme from "@/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}
