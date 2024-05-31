export interface IconProps {
  name: string;
  color?: string;
  size?: number;
  light?: boolean;
  contained?: boolean;
  disabled?: boolean;
  style?: string;
  onClick?: () => unknown;
}
