import theme from "@/theme/theme";
import Box from "./Box";

type TextProps = {
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
};

export default function Text({ tag = "p", children }: TextProps) {
  return (
    <Box styleSheet={{ fontFamily: theme.typografy.fontFamily }} tag={tag}>
      {children}
    </Box>
  );
}
