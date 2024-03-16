import { AuthCredentials, ValidationForm } from "../../../shared/types";

import {
  emailValidationForm,
  passwordValidationForm,
} from "./../register/register.util";

export interface LoginFormValues extends AuthCredentials {
  email: string;
  password: string;
}

export const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

// export const validation: ValidationForm<LoginFormValues> = (t) =>
//   emailValidationForm(t).concat(passwordValidationForm(t));
