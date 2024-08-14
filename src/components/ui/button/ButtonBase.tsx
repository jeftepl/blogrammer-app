import { ThemeTypographyVariants } from "@/theme/theme";
import Text from "../Text";
import React from "react";
import Ripple from "../ripple/Ripple";
import { StyleSheet } from "@/theme/StyleSheet";
import { useRouter } from "next/navigation";

export type ButtonBaseProps = {
  children: React.ReactNode;
  href?: string;
  textVariant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

// TODO: implement textVariant
export default function ButtonBase({
  children,
  href,
  textVariant,
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
