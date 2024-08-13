import { StyleSheet } from "@/theme/StyleSheet";
import { parseStyleSheet } from "@skynexui/responsive_stylesheet";
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

export const BaseComponent = ({ styleSheet = {}, ...otherProps }) => {
  return <StyledBaseComponent styleSheet={styleSheet} {...otherProps} />;
};
