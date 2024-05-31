import { CommonStyleProps, DictionaryLeaves } from ".";

export type ButtonVariant =
  | "ghost"
  | "outline"
  | "solid"
  | "subtle"
  | "unstyled"
  | "link";

export interface ButtonProps extends CommonStyleProps {
  text: DictionaryLeaves;
  variant?: ButtonVariant;
  block?: boolean;
  disabled?: boolean;
  uppercase?: boolean;
  loading?: boolean;
  onClick?: () => unknown;
}
