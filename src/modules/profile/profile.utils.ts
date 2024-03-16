// import * as Yup from "yup";

// import { passwordValidation } from "../auth/register/register.util";

// import {
//   ItemProps,
//   ValidationForm,
//   TypographyProps,
//   FormFieldOption,
//   DictionaryLeaves,
//   UserProfileDescription,
// } from "../../shared/types";

// import { Language } from "../../shared/generated";

// interface ProfileDescriptions {
//   title: { key: string } & TypographyProps;
//   items: Item[];
// }

// interface Item extends ItemProps {
//   key: string;
//   form?: ProfileForm;
//   isEditable?: boolean;
//   property?: keyof UserProfileDescription;
// }

// type FormDictionary<T> = {
//   initialValues: T;
//   validation: ValidationForm<T>;
//   fields: FormFieldOption<keyof T>[];
// };

// type ProfileFormDictionary =
//   | FormDictionary<FullNameFormValues>
//   | FormDictionary<LanguageFormValues>
//   | FormDictionary<ChangePasswordFormValues>;

// export interface FullNameFormValues {
//   firstName: string;
//   lastName: string;
// }

// export interface LanguageFormValues {
//   language: Language;
// }

// export interface ChangePasswordFormValues {
//   password: string;
//   newPassword: string;
//   confirmPassword: string;
// }

// export type ProfileFormValues =
//   | FullNameFormValues
//   | LanguageFormValues
//   | ChangePasswordFormValues;

// export enum ProfileForm {
//   GENDER = "gender",
//   LANGUAGE = "language",
//   FULL_NAME = "fullName",
//   CHANGE_PASSWORD = "changePassword",
// }

// export const profileDescriptions: ProfileDescriptions[] = [
//   {
//     title: {
//       key: "general",
//       subheader: true,
//       uppercase: true,
//       path: "profile.general.title",
//     },
//     items: [
//       {
//         key: "email",
//         property: "email",
//         left: "email",
//         label: "profile.general.labels.email",
//       },
//       {
//         key: "username",
//         property: "username",
//         left: "at",
//         label: "profile.general.labels.username",
//       },
//       {
//         form: ProfileForm.FULL_NAME,
//         property: "fullName",
//         key: "fullName",
//         left: "profile",
//         label: "profile.general.labels.fullName",
//         isEditable: true,
//       },
//     ],
//   },
//   {
//     title: {
//       key: "account",
//       subheader: true,
//       uppercase: true,
//       path: "profile.account.title",
//       mt: 4,
//     },
//     items: [
//       {
//         form: ProfileForm.LANGUAGE,
//         property: "language",
//         key: "language",
//         left: "language",
//         label: "profile.account.labels.language",
//         isEditable: true,
//       },
//       {
//         form: ProfileForm.CHANGE_PASSWORD,
//         key: "password",
//         left: "password",
//         label: "profile.account.labels.changePassword",
//         isEditable: true,
//       },
//     ],
//   },
// ];

export interface ProfileFormValues {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
}

export const initialValues: ProfileFormValues = {
  email: "",
  username: "",
  firstName: "",
  lastName: "",
};

// const fullNameValidation: ValidationForm<FullNameFormValues> = (t) =>
//   Yup.object({
//     firstName: Yup.string().required(t("global.error.required")),
//     lastName: Yup.string().required(t("global.error.required")),
//   });

// // Define la validación de idioma
// const languageValidation: ValidationForm<LanguageFormValues> = (t) =>
//   Yup.object({
//     language: Yup.mixed<Language>()
//       .oneOf([Language.English, Language.Spanish])
//       .required(t("global.error.required")),
//   });

// export const ProfileFormDictionary: Record<ProfileForm, ProfileFormDictionary> =
//   {
//     [ProfileForm.FULL_NAME]: {
//       validation: fullNameValidation,
//       initialValues: {
//         firstName: "",
//         lastName: "",
//       },
//       fields: [
//         {
//           type: "field",
//           props: {
//             name: "firstName",
//             icon: "firstName",
//             placeholder: "profile.form.firstName",
//           },
//         },
//         {
//           type: "field",
//           props: {
//             name: "lastName",
//             icon: "lastName",
//             placeholder: "profile.form.lastName",
//           },
//         },
//       ],
//     },
//     [ProfileForm.LANGUAGE]: {
//       validation: languageValidation,
//       initialValues: {
//         language: Language.Spanish,
//       },
//       fields: [
//         {
//           type: "radio",
//           props: {
//             name: "language",
//             options: [
//               { label: "global.language.en", value: Language.English },
//               { label: "global.language.es", value: Language.Spanish },
//             ],
//           },
//         },
//       ],
//     },
//   };
