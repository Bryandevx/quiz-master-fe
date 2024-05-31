import { createContext } from "react";

import { User } from "@/shared/models";

import { Language } from "@/shared/generated";

import { RegisterFormValues } from "@/modules/auth/register/register.util";

import { AuthCredentials, UpdateProfileValues } from "@/shared/types";

export interface AuthContext {
  user?: User;
  isAuthenticating: boolean;
  isAuthenticated: boolean;
  isValidatingToken: boolean;
  isRegistering: boolean;
  logout: () => Promise<void>;
  changeLanguage: (newLanguage: Language) => void;
  login: (credentials: AuthCredentials) => Promise<void>;
  register: (values: RegisterFormValues) => Promise<void>;
  updateProfile: (data: UpdateProfileValues) => Promise<void>;
}

export default createContext<AuthContext>({
  user: undefined,
  isAuthenticating: false,
  isValidatingToken: true,
  isAuthenticated: false,
  isRegistering: false,
  changeLanguage: () => {},
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  updateProfile: () => Promise.resolve(),
});
