import { Constants } from "../constants";

import { Dictionary } from "../types";

const { PARAM } = Constants;

const SpanishDictionary: Dictionary = {
  global: {
    language: {
      en: "Inglés",
      es: "Español",
    },
    languagePrefix: {
      en: "EN",
      es: "ES",
    },
    gender: {
      male: "Masculino",
      female: "Femenino",
      notSpecified: "No especificado",
    },
    time: {
      day: "Día",
      days: "Días",
    },
    weekDay: {
      monday: "Lunes",
      tuesday: "Martes",
      wednesday: "Miércoles",
      thursday: "Jueves",
      friday: "Viernes",
      saturday: "Sábado",
      sunday: "Domingo",
    },
    weekDayPrefix: {
      monday: "Lu",
      tuesday: "Ma",
      wednesday: "Mi",
      thursday: "Ju",
      friday: "Vi",
      saturday: "Sa",
      sunday: "Do",
    },
    muscleGroup: {
      calves: "Pantorrillas",
      hamstrings: "Isquiotibiales",
      quadriceps: "Cuadríceps",
      glutes: "Glúteos",
      biceps: "Bíceps",
      triceps: "Tríceps",
      forearms: "Antebrazos",
      trapezius: "Trapecio",
      latissimus: "Latísimo",
      chest: "Pecho",
      back: "Espalda",
      arms: "Brazos",
      abs: "Abdominales",
      legs: "Piernas",
      shoulders: "Espalda",
    },
    announcements: {
      comingSoon: "Próximamente",
    },
    error: {
      required: "Requerido",
      tooShort: "Se necesitan más caracteres",
      tooLong: "Se necesitan menos caracteres",
      invalidString: "Se necesita un valor de tipo texto",
      invalidNumber: "Se necesita un valor de tipo numérico",
      invalidEmail: "El correo electrónico proporcionado no es valido",
      invalidPassword: "La contraseña no es valida",
      invalidConfirmPassword: "Las contraseñas no coinciden",
      specialCharacterRequired:
        "Se necesita un carácter especial como: (!, #, $, %, &, *)",
      numericDigitRequired:
        "Se necesita un carácter numérico como: (0, 1, 2, 3, 4, 5, 7, 8, 9)",
      lowerCaseRequired: "Se necesita un carácter en minúscula",
      upperCaseRequired: "Se necesita un carácter en mayúscula",
      notSpacesAndSpecialCharacters:
        "No se permite espacios ni caracteres especiales",
      defaultError: {
        title: "Error",
        message: "Ha ocurrido un error, por favor intente nuevamente",
        button: "Intentar de nuevo",
      },
      versionMismatchException: {
        title: "Por favor actualize el app",
        message: "Encontramos una actualizacion necesaria",
        button: "Ok",
      },
      emailExistsException: {
        title: "Correo electrónico ya existe",
        message: "Correo electrónico ya existe",
        button: "Ok",
      },
      usernameExistsException: {
        title: "Nombre de usuario ya existe",
        message: "Nombre de usuario ya existe",
        button: "Ok",
      },
      notAuthorizedException: {
        title: "Credenciales erroneas",
        message: "El correo electrónico o la contraseña son inválidos",
        button: "Intentar de nuevo",
      },
      userNotConfirmedException: {
        title: "Cuenta no verificada",
        message:
          "Por favor, revise su correo electrónico para verificar su cuenta",
        button: "Ok",
      },
      limitExceededException: {
        title: "Límite excedido",
        message:
          "Has excedido el número de intentos permitidos. Por favor, intente de nuevo más tarde",
        button: "Ok",
      },
      expiredCodeException: {
        title: "Código expirado",
        message:
          "El código de verificación ha expirado. Por favor, intente de nuevo",
        button: "Ok",
      },
      codeMismatchException: {
        title: "Código incorrecto",
        message:
          "El código de verificación es incorrecto. Por favor, intente de nuevo",
        button: "Ok",
      },
    },
  },
  launch: {
    title: "¡Vamos a entrenar!",
    subtitle: "Encuentra todo lo que necesitas para lograr tus metas fitness",
    login: "Ingresar",
    register: "Crear cuenta",
  },
  forgotPassword: {
    title: "Resetear Contraseña",
    form: {
      email: "Email",
      submit: "Resetear Contraseña",
      verificationCode: "Código de Verificación",
      newPassword: "Nueva Contraseña",
    },
  },
  login: {
    title: "Ingresar a 2Train",
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
  home: {
    title: "Inicio",
    feed: {
      viewAll: "Ver todos",
      programs: "Programas",
      coaches: "Instructores",
      articles: "Artículos",
    },
  },
  profile: {
    title: "Perfil",
    unlock: "Adquiere 2Train Pro",
    invite: "Invitar a tus amigos a unirse",
    stats: {
      workouts: "Entrenamientos",
      plans: "Planes",
      bodyMeasures: "Mediciones",
    },
    general: {
      title: "General",
      labels: {
        username: "Usuario",
        fullName: "Nombre completo",
        email: "Correo Electrónico",
        gender: "Género",
      },
    },
    account: {
      title: "Cuenta",
      labels: {
        language: "Idioma",
        notifications: "Notificaciones",
        changePassword: "Cambiar contraseña",
        logout: "Cerrar sesión",
      },
    },
    form: {
      submit: "Guardar",
      firstName: "Primer nombre",
      lastName: "Apellido",
      password: "Contraseña",
      newPassword: "Contraseña nueva",
      repeatPassword: "Repetir contraseña",
    },
  },
  train: {
    title: "Entrenar",
    plan: {
      progress: "Progreso",
      routine: "Rutina",
      nutritionalPlan: "Nutrición",
      bodyMeasures: "Mediciones",
      workouts: "Entrenamientos",
      inProgressRoutine: "Su instructor(a) esta trabajando en ello",
      progressDays: `Día ${PARAM} de ${PARAM}`,
      coaches: {
        title: "Instructores",
        invite: "Invitar otros instructores",
      },
      areas: {
        general: "General",
        nutrition: "Nutrición",
      },
      planPending: {
        title: "Your plan is pending",
        description: "Your plan has not started yet.",
        action: "Ok",
      },
      noPlan: {
        title: "Sin Plan",
        description:
          "Necesitas un plan activo para habilitar esta funcionalidad. Contacte a su instructor para solicitar una invitación a un plan.",
        action: "Buscar Instructores",
      },
    },
    routineDay: {
      start: "Empezar",
      finish: "Finalizar",
      summary: `Esta rutina de entrenamiento esta compuesta por ${PARAM} diferentes ejercicios que se enfocan en las siguientes zonas músculares:`,
      discardChanges: {
        title: "¿Descartar cambios?",
        description:
          "Hay cambios sin guardar. ¿Quieres guardarlos finalizando el proceso?",
        primaryAction: "Finalizar",
        secondaryAction: "Salir",
      },
      pendingWorkouts: {
        title: "Ejercicios pendientes",
        description:
          "Aún hay algunos ejercios sin completar. ¿Estás seguro de finalizar el proceso?",
        primaryAction: "Finalizar",
        secondaryAction: "Salir",
      },
      emptyWorkouts: {
        title: "Sin cambios",
        description:
          "No has completado ningún ejercios aún. ¿Quieres continuar con el seguimiento del entrenamiento?",
        primaryAction: "Continuar",
        secondaryAction: "Salir",
      },
    },
    exercisePreview: {
      involvedMuscles: "Músculos relacionados",
    },
    tracker: {
      timer: {
        breakTimer: "Tiempo de Decanso",
      },
      workoutForm: {
        sets: "Sets",
        reps: "Reps",
        timer: "Segs",
        weight: "Peso",
        breakTimer: "Decanso",
        submit: "Guardar",
      },
    },
    feedback: {
      congrats: "Excelente!",
      completed: "COMPLETASTE",
      workouts: `${PARAM} entrenamientos`,
      pendingWorkouts: `Solo falta ${PARAM} entrenamientos más antes de completar el logro semanal!! Tu puedes.`,
      difficulty: {
        question: "¿Qué tan fácil fue?",
        firstAnswer: "FACIL",
        secondAnswer: "OK",
        thirdAnswer: "DIFICIL",
      },
      enjoyment: {
        question: "¿Lo disfrutaste?",
        firstAnswer: "NO",
        secondAnswer: "SI",
        thirdAnswer: "ME ENCANTO",
      },
      submit: "Enviar",
    },
  },
  coach: {
    readMore: "Leer más",
    information: {
      title: "Información",
      email: "Correo Electrónico",
      phone: "Teléfono",
      yearsOfExperience: "Experiencia",
    },
  },
  article: {
    author: {
      statement: "ESCRITO POR",
    },
  },
  salePlan: {
    coach: "Instructor",
    apply: "Solicitar",
    status: {
      available: "Disponible",
      unavailable: "No disponible",
    },
    info: {
      price: "Precio",
      duration: "Duración",
      nutritionalPlan: "Plan nutricional",
      workoutRoutine: "Rutina de ejercicios",
    },
  },
  notFound: {
    title: "Oops...",
  },
};

export default SpanishDictionary;
