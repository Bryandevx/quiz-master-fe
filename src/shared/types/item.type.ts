import { CommonStyleProps, DictionaryLeaves } from ".";

export interface ItemProps extends CommonStyleProps {
  paper?: boolean;
  label: DictionaryLeaves;
  description?: string;
  onClick?: () => any;
}
