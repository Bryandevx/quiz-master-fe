import { Constants } from "../constants";

import { Dictionary } from "../types";

const { PARAM } = Constants;

const SpanishDictionary: Dictionary = {
  login: {
    title: "Bienvenido a Quizmaster",
    form: {
      submit: "Ingresar",
      email: "Correo Electrónico",
      password: "Contraseña",
    },
    forgotPassword: "¿Olvidó tu contraseña?",
    verifyAccount: {
      title: "Verificar Contraseña",
      description:
        "Por favor, ingrese el código de verificación que se le ha enviado a su correo electrónico",
      form: {
        verificationCode: "código de verificación",
        submit: "Verificar Contraseña",
        sendNewCode: "Enviar código nuevo",
      },
    },
  },
  register: {
    form: {
      firstName: "Nombre",
      lastName: "Apellidos",
      email: "Correo Electrónico",
      username: "Nickname",
      password: "Contraseña",
      submit: "Submit",
      alreadyRegister: "Ya estas registrado?",
      login: "Inicia Sesion",
    },
  },
  home: {
    title: "QuizMaster",
    searchbar: {
      placeholder: "Buscar...",
    },
    sidemenu: {
      myProfile: "Mi Perfil",
      tests: "Examenes",
      createTest: "Crear Examen",
      signOut: "Salir",
    },
  },
  global: {
    language: {
      en: "",
      es: "",
    },
    languagePrefix: {
      en: "",
      es: "",
    },
    gender: {
      male: "",
      female: "",
      notSpecified: "",
    },
    time: {
      day: "",
      days: "",
    },
    announcements: {
      comingSoon: "",
    },
    error: {
      required: "",
      tooShort: "",
      tooLong: "",
      invalidString: "",
      invalidNumber: "",
      invalidEmail: "",
      invalidPassword: "",
      invalidConfirmPassword: "",
      specialCharacterRequired: "",
      numericDigitRequired: "",
      lowerCaseRequired: "",
      upperCaseRequired: "",
      notSpacesAndSpecialCharacters: "",
      defaultError: {
        title: "",
        message: "",
        button: "",
      },
      versionMismatchException: {
        title: "",
        message: "",
        button: "",
      },
      emailExistsException: {
        title: "",
        message: "",
        button: "",
      },
      usernameExistsException: {
        title: "",
        message: "",
        button: "",
      },
      notAuthorizedException: {
        title: "",
        message: "",
        button: "",
      },
      userNotConfirmedException: {
        title: "",
        message: "",
        button: "",
      },
      limitExceededException: {
        title: "",
        message: "",
        button: "",
      },
      expiredCodeException: {
        title: "",
        message: "",
        button: "",
      },
      codeMismatchException: {
        title: "",
        message: "",
        button: "",
      },
    },
  },
};

export default SpanishDictionary;
