import { Breakpoints } from "@skynexui/responsive_stylesheet";

// Generics
type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export type StyleSheet = {
  backgroundColor?: ResponsiveProperty<string> | string;
  color?: ResponsiveProperty<string> | string;
};
