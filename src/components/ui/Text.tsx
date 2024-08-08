import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";
import { ThemeTypographyVariants } from "@/theme/theme";
import { useTheme } from "@/theme/ThemeProvider";

type TextProps = {
  variant?: ThemeTypographyVariants;
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "li";
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
};

export default function Text({
  tag = "p",
  variant = "body2",
  styleSheet,
  children,
}: TextProps) {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];

  return (
    <BaseComponent
      as={tag}
      styleSheet={{
        ...textVariant,
        ...styleSheet,
      }}
    >
      {children}
    </BaseComponent>
  );
}
