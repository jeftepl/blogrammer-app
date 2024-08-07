import { StyleSheet } from "@/theme/StyleSheet";
import { parseStyleSheet } from "@skynexui/responsive_stylesheet";
import styled from "styled-components";

type StyledBaseComponent = {
  styleSheet?: StyleSheet;
};

const StyledBaseComponent = styled.div<StyledBaseComponent>`
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

// TODO: Fix warning on browser:
// app-index.js:33 Warning: React does not recognize the `styleSheet` prop on a DOM element
export const BaseComponent = ({ styleSheet = {}, ...otherProps }) => {
  return <StyledBaseComponent styleSheet={styleSheet} {...otherProps} />;
};
