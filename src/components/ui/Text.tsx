"use client";

import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";
import { ThemeTypographyVariants } from "@/theme/theme";
import { useTheme } from "@/theme/ThemeProvider";
import React from "react";

type TextProps = {
  variant?: ThemeTypographyVariants;
  tag?: "p" | "a" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "li";
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
};

const Text = React.forwardRef<HTMLDivElement, TextProps>(
  ({ tag = "p", variant = "body2", styleSheet, ...props }, ref) => {
    const theme = useTheme();
    const textVariant = theme.typography.variants[variant];

    return (
      <BaseComponent
        as={tag}
        styleSheet={{
          ...textVariant,
          ...styleSheet,
        }}
        ref={ref}
        {...props}
      />
    );
  }
);

Text.displayName = "Text";
export default Text;
