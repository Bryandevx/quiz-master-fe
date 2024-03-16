import { DictionaryLeaves, FormField } from ".";

export interface FieldProps<N = string> extends FormField<N> {
  //   icon?: IconName;
  disabled?: boolean;
  label?: DictionaryLeaves;
  placeholder?: DictionaryLeaves;
  secureTextEntry?: boolean;
  leftAddonText?: DictionaryLeaves;
}
