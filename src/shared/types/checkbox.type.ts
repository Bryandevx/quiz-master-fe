import { DictionaryLeaves, FormField } from ".";

interface DynamicLabel {
  text: DictionaryLeaves;
}

export interface CheckboxProps<N = string> extends FormField<N> {
  labels: DynamicLabel[];
}
