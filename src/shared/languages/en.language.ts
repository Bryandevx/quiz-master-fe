import { Constants } from "../constants";

import { Dictionary } from "../types";

const { PARAM } = Constants;

const EnglishDictionary: Dictionary = {
  global: {
    language: {
      en: "English",
      es: "Spanish",
    },
    languagePrefix: {
      en: "EN",
      es: "ES",
    },
    gender: {
      male: "Male",
      female: "Female",
      notSpecified: "No Specified",
    },
    time: {
      day: "Day",
      days: "Days",
    },
    weekDay: {
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
    },
    weekDayPrefix: {
      monday: "Mo",
      tuesday: "Tu",
      wednesday: "We",
      thursday: "Th",
      friday: "Fr",
      saturday: "Sa",
      sunday: "Su",
    },
    muscleGroup: {
      calves: "Calves",
      hamstrings: "Hamstrings",
      quadriceps: "Quadriceps",
      glutes: "Glutes",
      biceps: "Biceps",
      triceps: "Triceps",
      forearms: "Forearms",
      trapezius: "Trapezius",
      latissimus: "Latissimus",
      chest: "Chest",
      back: "Back",
      arms: "Arms",
      abs: "Abs",
      legs: "Legs",
      shoulders: "Shoulders",
    },
    announcements: {
      comingSoon: "Coming Soon",
    },
    error: {
      required: "Required",
      tooShort: "More characters needed",
      tooLong: "Less characters needed",
      invalidString: "A text value is required",
      invalidNumber: "A numeric value is required",
      invalidEmail: "Email provided is not valid",
      invalidPassword: "Password provided is not valid",
      invalidConfirmPassword: "The passwords are not the same",
      specialCharacterRequired:
        "Special character required, like: (!, #, $, %, &, *)",
      numericDigitRequired:
        "Digit character required, like: (0, 1, 2, 3, 4, 5, 7, 8, 9)",
      lowerCaseRequired: "Lower case needed",
      upperCaseRequired: "Upper case needed",
      notSpacesAndSpecialCharacters:
        "Not white spaces and special character supported",
      defaultError: {
        title: "Error",
        message: "An error has occurred",
        button: "Try again",
      },
      versionMismatchException: {
        title: "Please Update the app",
        message: "A newer required version of the app found",
        button: "Ok",
      },
      emailExistsException: {
        title: "That email is already taken",
        message: "email already taken",
        button: "Try again",
      },
      usernameExistsException: {
        title: "That username is already taken",
        message: "username already taken",
        button: "Try again",
      },
      notAuthorizedException: {
        title: "Invalid Credentials",
        message: "The email or password you provided is incorrect",
        button: "Try again",
      },
      userNotConfirmedException: {
        title: "User not confirmed",
        message: "Please check your email and validate your account",
        button: "Ok",
      },
      limitExceededException: {
        title: "Limit exceeded",
        message: "You have reached the limit of attempts",
        button: "Try again later",
      },
      expiredCodeException: {
        title: "Expired code",
        message: "The code you provided has expired",
        button: "Try again",
      },
      codeMismatchException: {
        title: "Code mismatch",
        message: "The code you provided is not correct",
        button: "Try again",
      },
    },
  },
  launch: {
    title: "Let's workout!",
    subtitle: "You can find all you need to achieve your fitness goals",
    login: "Sign in",
    register: "Create account",
  },
  forgotPassword: {
    title: "Reset password",
    form: {
      email: "Email",
      submit: "Reset password",
      verificationCode: "Verification code",
      newPassword: "New password",
    },
  },
  login: {
    title: "Log in to 2Train",
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
  home: {
    title: "Home",
    feed: {
      viewAll: "View all",
      programs: "Programs",
      coaches: "Coaches",
      articles: "Articles",
    },
  },
  profile: {
    title: "Profile",
    unlock: "Unlock 2Train Pro",
    invite: "Invite your friends to join",
    stats: {
      workouts: "Workouts",
      plans: "Plans",
      bodyMeasures: "Measures",
    },
    general: {
      title: "General",
      labels: {
        username: "Username",
        fullName: "Full name",
        email: "Email",
        gender: "Gender",
      },
    },
    account: {
      title: "Account",
      labels: {
        language: "Language",
        notifications: "Notifications",
        changePassword: "Change password",
        logout: "Log out",
      },
    },
    form: {
      submit: "Save",
      firstName: "First name",
      lastName: "Last name",
      password: "Password",
      newPassword: "New password",
      repeatPassword: "Repeat password",
    },
  },
  train: {
    title: "Train",
    plan: {
      progress: "Progress",
      routine: "Routine",
      nutritionalPlan: "Nutrition",
      bodyMeasures: "Body Measures",
      workouts: "Workouts",
      inProgressRoutine: "Your coach is currently working on it",
      progressDays: `Day ${PARAM} of ${PARAM}`,
      coaches: {
        title: "Coaches",
        invite: "Invite",
      },
      areas: {
        general: "General",
        nutrition: "Nutrition",
      },
      planPending: {
        title: "Your plan is pending",
        description: "Your plan has not started yet.",
        action: "Ok",
      },
      noPlan: {
        title: "No Plan",
        description:
          "You need to have an active plan to get enable this functionality. Contact your coach for request a plan invitation.",
        action: "Find Coaches",
      },
    },
    routineDay: {
      start: "Start",
      finish: "Finish",
      summary: `This workout routine is based on ${PARAM} different exercises that are focused on the following set of muscles:`,
      discardChanges: {
        title: "Discard changes?",
        description:
          "You have unsaved changes. Do you want to save them by finishing?",
        primaryAction: "Finish",
        secondaryAction: "Exit",
      },
      pendingWorkouts: {
        title: "Pending workouts",
        description:
          "There are still some pending workouts. Do you want to finish now?",
        primaryAction: "Finish",
        secondaryAction: "Exit",
      },
      emptyWorkouts: {
        title: "No changes",
        description:
          "You have not complete any workout yet. Do you want to continue tracking your progress?",
        primaryAction: "Continue",
        secondaryAction: "Exit",
      },
    },
    exercisePreview: {
      involvedMuscles: "Involved muscles",
    },
    tracker: {
      timer: {
        breakTimer: "Break time",
      },
      workoutForm: {
        sets: "Sets",
        reps: "Reps",
        timer: "Secs",
        weight: "Weight",
        breakTimer: "Break",
        submit: "Save",
      },
    },
    feedback: {
      congrats: "You rock star, you!",
      completed: "YOU COMPLETED",
      workouts: `${PARAM} workouts`,
      pendingWorkouts: `Only ${PARAM} more workouts until you reach this week\'s goal!! You got this.`,
      difficulty: {
        question: "How easy was it?",
        firstAnswer: "EASY",
        secondAnswer: "OK",
        thirdAnswer: "HARD",
      },
      enjoyment: {
        question: "Did you enjoy it?",
        firstAnswer: "NOT",
        secondAnswer: "YES",
        thirdAnswer: "LOVED IT",
      },
      submit: "Submit",
    },
  },
  coach: {
    readMore: "Read more",
    information: {
      title: "Information",
      email: "Email",
      phone: "Phone",
      yearsOfExperience: "Experience",
    },
  },
  article: {
    author: {
      statement: "WRITTEN BY",
    },
  },
  salePlan: {
    coach: "Coach",
    apply: "Apply",
    status: {
      available: "Available",
      unavailable: "Unavailable",
    },
    info: {
      price: "Price",
      duration: "Duration",
      nutritionalPlan: "Nutritional Plan",
      workoutRoutine: "Workout Routine",
    },
  },
  notFound: {
    title: "Oops...",
  },
};

export default EnglishDictionary;
