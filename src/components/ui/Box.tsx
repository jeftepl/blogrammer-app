import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";

type BoxProps = {
  tag?: "main" | "div" | "article" | "section" | "ul";
  styleSheet?: StyleSheet;
  children?: React.ReactNode;
};

export default function Box({ tag, styleSheet, children, ...props }: BoxProps) {
  const Tag = tag || "div";

  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}
