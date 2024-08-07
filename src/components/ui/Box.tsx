import { BaseComponent } from "@/theme/BaseComponent";
import { StyleSheet } from "@/theme/StyleSheet";

type BoxProps = {
  //TODO: fix type any
  tag: any;
  styleSheet: StyleSheet;
  children: React.ReactNode;
};

export default function Box({ styleSheet, children, tag, ...props }: BoxProps) {
  const Tag = tag || "div";

  return (
    <BaseComponent as={Tag} styleSheet={styleSheet} {...props}>
      {children}
    </BaseComponent>
  );
}
