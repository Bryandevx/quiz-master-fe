import { Constants } from "../constants";

import { Dictionary } from "../types";

const { PARAM } = Constants;

const EnglishDictionary: Dictionary = {
  login: {
    title: "Log into Quizmaster!",
    form: {
      submit: "Log in",
      email: "Email",
      password: "Password",
    },
    forgotPassword: "Forgot password?",
    verifyAccount: {
      title: "Verify Account",
      description: "Please check your email and validate your account",
      form: {
        verificationCode: "verification code",
        submit: "Verify Account",
        sendNewCode: "Send me a new code!",
      },
    },
  },
  register: {
    form: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      username: "Nickname",
      password: "Password",
      submit: "Submit",
      alreadyRegister: "Already a user?",
      login: "Login now",
    },
  },
  home: {
    title: "QuizMaster",
    searchbar: {
      placeholder: "Search...",
    },
    sidemenu: {
      myProfile: "My Profile",
      tests: "Tests",
      createTest: "Create Test",
      signOut: "Sign Out",
    },
  },
};

export default EnglishDictionary;
