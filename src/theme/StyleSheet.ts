import {
  Breakpoints,
  StyleSheet as StyleSheetLib,
} from "@skynexui/responsive_stylesheet";

// Generics
export type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export type StyleSheet = StyleSheetLib & {
  borderRadius?: ResponsiveProperty<string> | string;
};
