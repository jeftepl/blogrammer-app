import { StyleSheet } from "@/theme/StyleSheet";
import { parseStyleSheet } from "@skynexui/responsive_stylesheet";
import React from "react";
import styled from "styled-components";

type StyledBaseComponent = {
  styleSheet?: StyleSheet;
};

const StyledBaseComponent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "styleSheet",
})<StyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

type BasecomponentProps = {
  as?: string;
  styleSheet?: StyleSheet;
  children?: React.ReactNode;
};

export const BaseComponent = React.forwardRef<
  HTMLDivElement,
  BasecomponentProps
>(({ styleSheet = {}, ...props }, ref) => (
  <StyledBaseComponent styleSheet={styleSheet} {...props} ref={ref} />
));

BaseComponent.displayName = "BaseComponent";
