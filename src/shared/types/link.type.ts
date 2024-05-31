import { CommonStyleProps, DictionaryLeaves, RouteLink } from ".";

export interface LinkProps extends CommonStyleProps {
  text: DictionaryLeaves;
  to?: string | RouteLink;
  center?: boolean;
  underlined?: boolean;
  color?: "primary" | "default";
  onClick?: () => unknown;
}
