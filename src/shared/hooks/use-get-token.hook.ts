import { useCallback, useState } from "react";

import { version } from "../../../package.json";

import { ConfigService, StorageService } from "../services";

import {
  useLoginMutation,
  useUserLazyQuery,
} from "../generated/graphql-schema";

// import { AlertError } from "../errors";

import { AuthCredentials } from "../types";

type GetTokenQuery = (credentials: AuthCredentials) => Promise<void>;

interface Response {
  loading: boolean;
  data: {
    idToken: string;
    tokenInfo: {
      exp: number;
      email: string;
    };
    refreshToken: string;
  };
  setData: (params: object) => void;
}

// const [loginMutation] = useLoginMutation();

const useGetTokens = (): [GetTokenQuery, Response] => {
  const [response, setResponse] = useState({
    loading: false,
    data: {
      idToken: "",
      tokenInfo: { exp: 0, email: "" },
      refreshToken: "",
    },
  });

  const setData = useCallback(
    async (params: object) => {
      setResponse({
        ...response,
        ...params,
      });
    },
    [response]
  );

  const fetchToken: GetTokenQuery = useCallback(async (credentials) => {
    setResponse({ ...response, loading: true });

    const request = await (
      await fetch(ConfigService.apiUrl + "/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          appVersion: version,
        }),
      })
    ).json();

    if (request.statusCode !== 200) {
      // setResponse({ ...response, loading: false });
      // switch (request.message) {
      //   case "VersionMismatchException":
      //     throw new AlertError(ErrorType.VERSION_MISMATCH);
      //   case "UserNotConfirmedException":
      //     throw new AlertError(ErrorType.USER_NOT_CONFIRMED);
      //   case "NotAuthorizedException":
      //     throw new AlertError(ErrorType.INVALID_CREDENTIALS);
      //   default:
      //     throw new AlertError(ErrorType.DEFAULT);
      // }
    }

    const {
      tokens: {
        idToken = "",
        idInfo: { exp = 0, email = "" } = {},
        refreshToken = "",
      },
    } = request;

    setResponse({
      ...response,
      loading: true,
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
  }, []);

  return [fetchToken, { ...response, setData }];
};
export default useGetTokens;
