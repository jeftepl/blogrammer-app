"use client";

import NextLink from "next/link";
import Text from "./Text";
import React from "react";
import { StyleSheet } from "@/theme/StyleSheet";
import { ColorVariant, ThemeTypographyVariants } from "@/theme/theme";
import { useTheme } from "@/theme/ThemeProvider";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: ColorVariant;
  colorVariantEnabled?: boolean;
};

const Link = React.forwardRef<HTMLDivElement, LinkProps>(
  (
    {
      href,
      children,
      colorVariant = "primary",
      styleSheet,
      colorVariantEnabled = true,
    }: LinkProps,
    ref
  ) => {
    const theme = useTheme();

    const isExternalLink = href.startsWith("http");
    const tag: "a" = "a";
    const currentColorSet = {
      color: theme.colors[colorVariant].x500,
      hover: {
        color: theme.colors[colorVariant].x400,
      },
      focus: {
        color: theme.colors[colorVariant].x600,
      },
    };

    const linkProps = {
      tag,
      ref,
      href,
      children,
      styleSheet: {
        textDecoration: "none",
        ...(colorVariantEnabled && {
          ...currentColorSet,
        }),
        ...styleSheet,
      },
    };

    if (isExternalLink) {
      return <Text {...{ ...linkProps, target: "_blank" }}>{children}</Text>;
    }

    return (
      <NextLink href={href} passHref legacyBehavior>
        <Text {...linkProps}>{children}</Text>
      </NextLink>
    );
  }
);

Link.displayName = "Link";
export default Link;
