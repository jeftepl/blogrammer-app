import { Breakpoints } from "@skynexui/responsive_stylesheet";

// Generics
type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export type StyleSheet = {
  fontFamily?: ResponsiveProperty<string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;
};
