import { Constants } from "../constants";

//import { EmptyCacheError } from '../errors';

import { Language } from "../generated";

enum StorageName {
  LANGUAGE = "@language",
  ID_TOKEN = "@idToken",
  ID_TOKEN_INFO = "@idTokenInfo",
  REFRESH_TOKEN = "@refreshToken",
}

// enum StorageName {
//   LANGUAGE = "@language",
// }

class StorageService {
  async clear() {
    return localStorage.clear();
  }

  async getLanguage(): Promise<Language> {
    try {
      const value = localStorage.getItem(StorageName.LANGUAGE) as Language;
      return value || Language.Spanish;
    } catch (error) {
      return Constants.DEFAULT_LANGUAGE;
    }
  }

  async setLanguage(value: Language) {
    return localStorage.setItem(StorageName.LANGUAGE, value);
  }

  async setIdTokenInfo(value: string) {
    return localStorage.setItem(StorageName.ID_TOKEN_INFO, value);
  }

  async getIdToken(): Promise<string | null> {
    try {
      const value = (await localStorage.getItem(
        StorageName.ID_TOKEN
      )) as string;

      if (!value) {
        //  throw new EmptyCacheError();
      }

      return value;
    } catch (error) {
      return null;
    }
  }

  async setIdToken(value: string) {
    return localStorage.setItem(StorageName.ID_TOKEN, value);
  }

  async getRefreshToken(): Promise<string | null> {
    try {
      const value = (await localStorage.getItem(
        StorageName.REFRESH_TOKEN
      )) as string;

      if (!value) {
        // throw new EmptyCacheError();
      }

      return value;
    } catch (error) {
      return null;
    }
  }

  async setRefreshToken(value: string) {
    return localStorage.setItem(StorageName.REFRESH_TOKEN, value);
  }

  async getIdTokenInfo(): Promise<string | null> {
    try {
      const value = (await localStorage.getItem(
        StorageName.ID_TOKEN_INFO
      )) as string;

      if (!value) {
        // throw new EmptyCacheError();
      }

      return value;
    } catch (error) {
      return null;
    }
  }
}

const instance = new StorageService();

export default instance;
