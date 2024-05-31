import * as Yup from "yup";

import {
  ButtonProps,
  CheckboxProps,
  FieldProps,
  RadioProps,
  Translator,
} from ".";

type InputType = "field" | "checkbox" | "radio";

type FieldType = "submit" | InputType;

type FormFieldType<T extends FieldType, F extends {}> = {
  type: T;
  props: F;
};

type FormFieldProps<N> = Omit<FieldProps<N>, "onFormChange" | "key">;
type FormCheckboxProps<N> = Omit<CheckboxProps<N>, "onFormChange" | "key">;
type FormRadioProps<N> = Omit<RadioProps<N>, "onFormChange" | "key">;

export type FormFieldOption<N> =
  | FormFieldType<"submit", ButtonProps>
  | FormFieldType<"field", FormFieldProps<N>>
  | FormFieldType<"checkbox", FormCheckboxProps<N>>
  | FormFieldType<"radio", FormRadioProps<N>>;

export type ValidationForm<T> = (t: Translator) => Yup.Schema<T>;

export interface FormField<N = string> {
  name: N;
  key: string;
  value?: any;
  error?: string;
  disabled?: boolean;
  onFormSetValue?: (value: any) => any;
  onFormChange?: (e: string | React.ChangeEvent<any>) => any;
}

export interface FormProps<T> {
  fields?: FormFieldOption<keyof T>[];
  initialValues: T | undefined;
  validation?: ValidationForm<T>;
  children?:
    | ((props: {
        handleChange: (name: keyof T) => any;
        handleSubmit: (
          e?: React.FormEvent<HTMLFormElement> | undefined
        ) => void;
        values: T;
      }) => React.ReactNode)
    | React.ReactNode;
  onSubmit: (values: T) => void;
}
