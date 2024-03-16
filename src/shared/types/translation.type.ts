import { Leaves } from ".";

import { Language } from "../generated";

export type Translator = (path: DictionaryLeaves) => string;

export interface LanguageOption {
  label: DictionaryLeaves;
  value: Language;
}

export interface Dictionary {
  global: {
    language: {
      en: string;
      es: string;
    };
    languagePrefix: {
      en: string;
      es: string;
    };
    gender: GenderDictionary;
    time: {
      day: string;
      days: string;
    };

    announcements: {
      comingSoon: string;
    };
    error: {
      required: string;
      tooShort: string;
      tooLong: string;
      invalidString: string;
      invalidNumber: string;
      invalidEmail: string;
      invalidPassword: string;
      invalidConfirmPassword: string;
      specialCharacterRequired: string;
      numericDigitRequired: string;
      lowerCaseRequired: string;
      upperCaseRequired: string;
      notSpacesAndSpecialCharacters: string;
      defaultError: {
        title: string;
        message: string;
        button: string;
      };
      versionMismatchException: {
        title: string;
        message: string;
        button: string;
      };
      emailExistsException: {
        title: string;
        message: string;
        button: string;
      };
      usernameExistsException: {
        title: string;
        message: string;
        button: string;
      };
      notAuthorizedException: {
        title: string;
        message: string;
        button: string;
      };
      userNotConfirmedException: {
        title: string;
        message: string;
        button: string;
      };
      limitExceededException: {
        title: string;
        message: string;
        button: string;
      };
      expiredCodeException: {
        title: string;
        message: string;
        button: string;
      };
      codeMismatchException: {
        title: string;
        message: string;
        button: string;
      };
    };
  };
  profile: {
    general: {
      labels: {
        username: string;
        email: string;
        fullName: string;
        language: string;
        changePassword: string;
      };
    };
  };
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
