import * as Yup from "yup";
import { Translator, ValidationForm } from "@/shared/types";

export const passwordValidation = (t: Translator) =>
  Yup.string()
    .min(8, t("global.error.tooShort"))
    .max(20, t("global.error.tooLong"))
    .matches(/^(?=.*[@$!%*#?&])/, t("global.error.specialCharacterRequired"))
    .matches(/^(?=.*\d)/, t("global.error.numericDigitRequired"))
    .matches(/^(?=.*[a-z])/, t("global.error.lowerCaseRequired"))
    .matches(/^(?=.*[A-Z])/, t("global.error.upperCaseRequired"))
    .required(t("global.error.required"));

export const verificationCodeValidation = (t: Translator) =>
  Yup.string()
    .min(2, t("global.error.tooShort"))
    .max(20, t("global.error.tooLong"))
    .required(t("global.error.required"));

export const emailValidationForm: ValidationForm<{ email: string }> = (t) =>
  Yup.object({
    email: Yup.string()
      .email(t("global.error.invalidEmail"))
      .required(t("global.error.required")),
  });

export const passwordValidationForm: ValidationForm<{ password: string }> = (
  t
) =>
  Yup.object({
    password: passwordValidation(t),
  });

export const verificationCodeValidationForm: ValidationForm<{
  verificationCode: string;
}> = (t) =>
  Yup.object({
    verificationCode: verificationCodeValidation(t),
  });

export const newPasswordValidationForm: ValidationForm<{
  newPassword: string;
}> = (t) =>
  Yup.object({
    newPassword: passwordValidation(t),
  });

export interface RegisterFormValues {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
  agreement: boolean;
  collectData: boolean;
}

export const initialValues: RegisterFormValues = {
  email: "",
  username: "",
  password: "",
  firstName: "",
  lastName: "",
  confirmPassword: "",
  agreement: false,
  collectData: false,
};

// export const validation: ValidationForm<RegisterFormValues> = (t) =>
//   Yup.object({
//     username: Yup.string()
//       .matches(
//         Regex.NOT_SPACES_AND_SPECIAL_CHARACTERS,
//         t("global.error.notSpacesAndSpecialCharacters")
//       )
//       .required(t("global.error.required")),
//     firstName: Yup.string().required(t("global.error.required")),
//     lastName: Yup.string().required(t("global.error.required")),
//     agreement: Yup.bool()
//       .oneOf([true], t("global.error.required"))
//       .required(t("global.error.required")),
//     collectData: Yup.bool()
//       .oneOf([true], t("global.error.required"))
//       .required(t("global.error.required")),
//   })
//     .concat(emailValidationForm(t))
//     .concat(confirmPasswordValidationForm(t));

// export interface ResetPasswordValues {
//   email: string;
//   verificationCode: string;
//   newPassword: string;
// }

// export const resetPasswordValidation: ValidationForm<ResetPasswordValues> = (
//   t
// ) =>
//   Yup.object({
//     verificationCode: Yup.string()
//       .matches(
//         Regex.NOT_SPACES_AND_SPECIAL_CHARACTERS,
//         t("global.error.notSpacesAndSpecialCharacters")
//       )
//       .required(t("global.error.required")),
//   })
//     .concat(emailValidationForm(t))
//     .concat(newPasswordValidationForm(t));
