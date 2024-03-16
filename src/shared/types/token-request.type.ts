export type TokenRequestType = {
  statusCode: number;
  message: string;
  tokens: {
    idToken: string;
    idInfo: {
      exp: string;
      email: string;
    };
    refreshToken: string;
  };
};
