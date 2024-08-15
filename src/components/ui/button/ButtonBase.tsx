import React from "react";
import { useRouter } from "next/navigation";
import { ThemeTypographyVariants } from "@/types/Theme";
import { StyleSheet } from "@skynexui/responsive_stylesheet";
import Text from "../Text";
import Ripple from "../ripple/Ripple";

export type ButtonBaseProps = {
  children: React.ReactNode;
  href?: string;
  textVariant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function ButtonBase({
  children,
  href,
  styleSheet,
  onClick,
}: ButtonBaseProps) {
  const router = useRouter();

  const isLink = Boolean(href);
  const Tag = isLink ? "a" : "button";

  return (
    <Text
      tag={Tag}
      href={href}
      styleSheet={{
        overflow: "hidden",
        position: "relative",
        backgroundColor: "transparent",
        color: "inherit",
        border: "0",
        outline: "0",
        cursor: "pointer",
        textDecoration: "none",
        ...styleSheet,
      }}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        isLink && event.preventDefault();
        isLink && href && router.push(href);
        !isLink && onClick && onClick(event);
      }}
    >
      {children}
      <Ripple />
    </Text>
  );
}
