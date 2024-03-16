import { CSSProperties } from "react";

export interface MarginProps {
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  margin?: number;
}

export interface PaddingProps {
  paddingTop?: number;
  paddingBottom?: number;
  paddingRight?: number;
  paddingLeft?: number;
  padding?: number;
}

export interface StyleProp {
  style?: CSSProperties;
}

export interface SpacingProps extends MarginProps, PaddingProps {}

export interface CommonStyleProps extends SpacingProps, StyleProp {}
