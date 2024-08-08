import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";
import theme from "@/theme/theme";

type Display = "display1";

type Heading = "heading1" | "heading2" | "heading3" | "heading4" | "heading5";

type Body = "body1" | "body2" | "body3" | "body4" | "body5";

type TextProps = {
  variant?: Display | Heading | Body;
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "li" | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
};

export default function Text({
  tag = "p",
  variant = "body2",
  styleSheet,
  children,
}: TextProps) {
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
