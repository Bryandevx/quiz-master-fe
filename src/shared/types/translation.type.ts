import { Leaves } from ".";

import { Language } from "../generated";

export type Translator = (path: DictionaryLeaves) => string;

export interface LanguageOption {
  label: DictionaryLeaves;
  value: Language;
}

export interface Dictionary {
  home: {
    title: string;
    searchbar: {
      placeholder: string;
    };
    sidemenu: {
      myProfile: string;
      tests: string;
      createTest: string;
      signOut: string;
    };
  };
  login: {
    title: string;
    form: {
      submit: string;
      email: string;
      password: string;
    };
    forgotPassword: string;
    verifyAccount: {
      title: string;
      description: string;
      form: {
        verificationCode: string;
        submit: string;
        sendNewCode: string;
      };
    };
  };
  register: {
    form: {
      firstName: string;
      lastName: string;
      email: string;
      username: string;
      password: string;
      submit: string;
      alreadyRegister: string;
      login: string;
    };
  };
}

export type GenderDictionary = {
  male: string;
  female: string;
  notSpecified: string;
};

export type ErrorTypeDictionary = {
  notAuthorizedException: string;
  versionMismatchException: string;
  usernameExistsException: string;
  emailExistsException: string;
  userNotConfirmedException: string;
  limitExceededException: string;
  expiredCodeException: string;
  codeMismatchException: string;
  defaultError: string;
};

export type LanguageDictionary = {
  en: string;
  es: string;
};

export type DictionaryLeaves = Leaves<Dictionary, 4>;
