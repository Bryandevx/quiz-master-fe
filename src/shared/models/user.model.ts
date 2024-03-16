import { DictionaryService } from "../services";

import { Translator, UserProfileDescription, UserRequestData } from "../types";

class User {
  private t: Translator;

  public data: UserRequestData;

  constructor(t: Translator, data: UserRequestData) {
    this.t = t;

    this.data = data;
  }

  get email() {
    return this.data.email;
  }

  get username() {
    return this.data.username;
  }

  get firstName() {
    return this.data.firstName;
  }

  get lastName() {
    return this.data.lastName;
  }

  get language() {
    return this.data.language;
  }

  get fullName() {
    return `${this.data.firstName} ${this.data.lastName}`;
  }

  get firstAndLastName() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
    };
  }

  get profileForm() {
    return this.data;
  }

  get profileDescription(): UserProfileDescription {
    return {
      email: this.email,
      username: this.username,
      firstName: this.firstName,
      language: this.formattedLanguage,
    };
  }

  get formattedLanguage() {
    if (this.data.language !== undefined && this.data.language !== null) {
      return this.t(
        `global.language.${DictionaryService.parseLanguageToDictionaryField(
          this.data.language
        )}`
      );
    } else {
      // Manejo si la propiedad language es undefined o null
      // Por ejemplo, devolver un valor predeterminado o lanzar una excepción
      return "Language not specified";
    }
  }
}

export default User;
