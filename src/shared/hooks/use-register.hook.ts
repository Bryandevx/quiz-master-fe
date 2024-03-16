import { useCallback, useState } from "react";

import { AlertError } from "../errors";

import { ConfigService } from "../services";

import { ErrorType } from "../types";

type RegisterRequest = (email: string, password: string) => Promise<void>;

interface Response {
  isRegistering: boolean;
  setIsRegistering: (params: boolean) => void;
}

const useRegister = (): [RegisterRequest, Response] => {
  const [isRegistering, setIsRegistering] = useState(false);

  const register: RegisterRequest = useCallback(async (email, password) => {
    const request = await (
      await fetch(ConfigService.apiUrl + "/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
    ).json();

    if (request.statusCode !== 200) {
      setIsRegistering(false);

      switch (request.message) {
        case "UsernameExistsException":
          throw new AlertError(ErrorType.USER_ALREADY_EXISTS);
        default:
          throw new AlertError(ErrorType.DEFAULT);
      }
    } else {
      return request;
    }
  }, []);

  return [register, { isRegistering, setIsRegistering }];
};
export default useRegister;
