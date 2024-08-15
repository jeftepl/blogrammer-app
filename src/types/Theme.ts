import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";
import theme from "@/theme";

export type Theme = typeof theme;

export type ThemeTypographyVariants = keyof typeof typography.variants;

export type ThemeColorVariant = keyof typeof colors;
