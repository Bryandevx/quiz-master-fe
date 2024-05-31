import { AuthCredentials, ValidationForm } from "@/shared/types";

import * as Yup from "yup";

export interface LoginFormValues extends AuthCredentials {
  email: string;
  password: string;
}

export const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

export const validation: ValidationForm<LoginFormValues> = (t) => {
  return Yup.object({
    email: Yup.string()
      .email(t("global.error.invalidEmail"))
      .required(t("global.error.required")),
    password: Yup.string().required(t("global.error.required")),
  });
};
