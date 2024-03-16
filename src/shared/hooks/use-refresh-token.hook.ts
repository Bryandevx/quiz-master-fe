import { useCallback, useState } from "react";

import { AlertError } from "../errors";

import { ConfigService, StorageService } from "../services";

import { ErrorType, TokenRequestType } from "../types";

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

type RefreshIdTokenRequest = (shouldLoad: boolean) => Promise<TokenRequestType>;

const useRefreshIdToken = (): [RefreshIdTokenRequest, Response] => {
  const [response, setResponse] = useState({
    loading: true,
    data: {
      idToken: "",
      tokenInfo: { exp: 0, email: "" },
      refreshToken: "",
    },
  });

  const setData = useCallback((params: object) => {
    setResponse({
      ...response,
      ...params,
    });
  }, []);

  const refreshIdToken: RefreshIdTokenRequest = useCallback(
    async (shouldLoad: boolean) => {
      setResponse({ ...response, loading: shouldLoad });

      const oldRefreshToken = await StorageService.getRefreshToken();
      const storedInfo = await StorageService.getIdTokenInfo();
      const oldIdTokenInfo = storedInfo
        ? await JSON.parse(storedInfo)
        : undefined;
      if (oldIdTokenInfo && oldRefreshToken) {
        const request = await (
          await fetch(ConfigService.apiUrl + "/auth/refreshToken", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              refreshToken: oldRefreshToken,
              email: oldIdTokenInfo.email,
            }),
          })
        ).json();

        const { statusCode } = request;

        if (statusCode !== 200) {
          throw new AlertError(ErrorType.DEFAULT);
        } else {
          return request;
        }
      } else {
        return { statusCode: 404, message: "Token Not Found" };
      }
    },
    []
  );

  return [refreshIdToken, { ...response, setData }];
};
export default useRefreshIdToken;
