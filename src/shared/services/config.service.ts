import * as config from "../../../package.json";

interface EnvVariables {
  NODE_ENV: string;
  API_URL: string;
  COGNITO_REGION: string;
  COGNITO_USER_POOL_ID: string;
  COGNITO_REGION_WEB_CLIENT_ID: string;
  SENTRY_URL: string;
}

class ConfigService {
  private envVariables: EnvVariables;

  constructor() {
    this.envVariables = {
      NODE_ENV: "development",
      API_URL: "http://localhost:5000/graphql",
      COGNITO_REGION: "",
      COGNITO_USER_POOL_ID: "",
      COGNITO_REGION_WEB_CLIENT_ID: "",
      SENTRY_URL: "",
    };
  }

  get name() {
    return config.name;
  }

  get version() {
    return config.version;
  }

  get environment() {
    return this.envVariables.NODE_ENV;
  }

  get isProduction() {
    return this.environment === "production";
  }

  get apiUrl() {
    return this.envVariables.API_URL;
  }

  get sentryUrl() {
    return this.envVariables.SENTRY_URL;
  }
}

const instance = new ConfigService();

export default instance;
