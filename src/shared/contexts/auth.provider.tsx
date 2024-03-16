import React, { FC, useState, useEffect, useCallback } from "react";

import { useApolloClient } from "@apollo/client";

import AuthContext from "./auth.context";
import { IUserProfile } from "../models";

import {
  useGetTokens,
  useGlobalState,
  useTranslation,
  useRegister,
  useRefreshIdToken,
} from "@/shared/hooks";

import { EXPIRATION_OFFSET_TIME, GlobalState } from "@/shared/constants";

import { User } from "@/shared/models";

import { StorageService } from "@/shared/services";

import {
  Language,
  // useUserProfileLazyQuery,
  // useUpdateUserMutation,
  // useCreateUserMutation,
  LoginMutation,
  Role,
  useLoginMutation,
  useSignupMutation,
  useUpdateUserMutation,
} from "@/shared/generated";

import { AlertError } from "@/shared/errors";

import { RegisterFormValues } from "@/modules/auth/register/register.util";

import {
  AuthCredentials,
  ErrorType,
  UpdateProfileValues,
  UserState,
} from "@/shared/types";
import { useRouter } from "next/router";

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const client = useApolloClient();

  const { t, language, setLanguage, switchLanguage } = useTranslation();

  //const [user, setUser] = useGlobalState<UserState>(GlobalState.USER);

  const [registerRequest, { isRegistering, setIsRegistering }] = useRegister();

  const [user, setUser] = useState<IUserProfile | undefined>(undefined);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [updateUser] = useUpdateUserMutation();

  const router = useRouter();

  const [
    getTokens,
    {
      loading: isAuthenticating,
      data: { idToken, tokenInfo },
      setData,
    },
  ] = useGetTokens();

  const [
    refreshIdToken,
    { loading: isValidatingToken, setData: setRefreshData },
  ] = useRefreshIdToken();

  // const [updateUser, { loading: isProfileUpdating }] = useUpdateUserMutation();
  const [userLogin] = useLoginMutation();

  // const [fetchUser, { data, updateQuery: updateUserCache, refetch }] =
  //   useUserProfileLazyQuery({
  //     fetchPolicy: "cache-and-network",
  //   });

  const [createUser] = useSignupMutation();

  React.useEffect(() => {
    const setupLanguage = async () => {
      setLanguage(await StorageService.getLanguage());
    };

    const retrieveStoredToken = async () => {
      const idToken = await StorageService.getIdToken();
      const tokeninfo =
        (await StorageService.getIdTokenInfo()) ||
        JSON.stringify({ exp: 0, email: "" });
      const data = { idToken, tokenInfo: await JSON.parse(tokeninfo) };

      if (idToken && tokeninfo) {
        setData({ data });
      } else {
        setRefreshData({ loading: false });
      }
    };

    setupLanguage();
    retrieveStoredToken();
  }, []);

  React.useEffect(() => {
    const { exp, email } = tokenInfo;

    const isExpired = exp && exp <= Math.floor(Date.now() / 1000);

    // const loginWithToken = async () => {
    //   await fetchUser({ variables: { where: { email } } });
    // };

    const refreshTokenAsync = async () => {
      await refreshIdToken(true);
    };

    if (!user) {
      if (exp && isExpired) {
        refreshTokenAsync();
      }

      // if (idToken.length) {
      //   loginWithToken();
      // }
    }
    if (exp) {
      const expSeconds =
        exp - (Math.floor(Date.now() / 1000) + EXPIRATION_OFFSET_TIME);

      const idTokenRefreshTimeout = setTimeout(() => {
        refreshTokens();
      }, expSeconds * 1000);

      return () => {
        clearTimeout(idTokenRefreshTimeout);
      };
    }
  }, [idToken]);

  // React.useEffect(() => {
  //   setUser(data?.user ? new User(t, data.user) : undefined);
  // }, [data]);

  // React.useEffect(() => {
  //   if (user && user.language !== language) {
  //     updateProfile({ language });
  //   }

  //   user && setRefreshData({ loading: false });

  //   user && setData({ loading: false });
  // }, [user, language]);

  // const refreshUser = (data: any) => {
  //   if (data) {
  //     updateUserCache &&
  //       updateUserCache(({ user }) => ({
  //         user: {
  //           ...user,
  //           ...data,
  //         },
  //       }));
  //   } else {
  //     refetch && refetch();
  //   }
  // };

  const logout = React.useCallback(async () => {
    setUser(undefined);

    setData({
      data: {
        idToken: "",
        tokenInfo: { exp: 0, email: "" },
        refreshToken: "",
      },
    });

    await client.clearStore();
    await StorageService.clear();
  }, []);

  const login = React.useCallback(async (credentials: AuthCredentials) => {
    const email = credentials.email;
    const password = credentials.password;
    const response = await userLogin({
      variables: {
        data: {
          email: email,
          password: password,
        },
      },
    });
    setUser(response.data?.login.user as IUserProfile);
    setIsLoading(false);
    localStorage.setItem("token", response.data?.login.access_token as string);
    setToken(response.data?.login.access_token as string);

    router.push("/");
  }, []);

  const updateProfile = React.useCallback(async (data: UpdateProfileValues) => {
    alert(data.email);
    await updateUser({
      variables: {
        data,
      },
    });

    // updateUserCache(({ user }) => ({
    //   user: {
    //     ...user,
    //     ...data,
    //   },
    // }));
  }, []);

  const changeLanguage = React.useCallback(async (newLanguage: Language) => {
    switchLanguage(newLanguage);
  }, []);

  const register = async (values: RegisterFormValues) => {
    try {
      //    setIsRegistering(true);

      const { firstName, lastName, username, email, password } = values;

      const profile = {
        firstName,
        lastName,
        password,
        username,
        email,
      };

      // await registerRequest(email, password);
      await createUser({
        variables: {
          data: { ...profile },
        },
      });

      router.push("/login");

      // setIsRegistering(false);
    } catch (e) {
      // setIsRegistering(false);

      if (e instanceof Error) {
        if (e.message.includes("username_unique")) {
          throw new AlertError(ErrorType.USER_ALREADY_EXISTS);
        }
        throw e;
      }
    }
  };

  const refreshTokens = async () => {
    const request = await refreshIdToken(false);

    const {
      statusCode,
      tokens: {
        idToken,
        idInfo: { exp, email },
        refreshToken,
      },
    } = request;

    if (statusCode === 200) {
      setData({
        data: {
          idToken,
          tokenInfo: {
            exp,
            email,
          },
          refreshToken,
        },
      });

      await StorageService.setIdToken(idToken);
      await StorageService.setRefreshToken(refreshToken);
      await StorageService.setIdTokenInfo(JSON.stringify({ exp, email }));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        // user,
        isAuthenticating,
        isValidatingToken,
        // isProfileUpdating,
        login,
        logout,
        changeLanguage,
        updateProfile,
        // resendConfirmationCode,
        // confirmRegistration,
        // changePassword,
        isRegistering,
        register,
        //     refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
