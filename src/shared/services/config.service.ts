import * as config from "../../../package.json";

interface EnvVariables {
  NODE_ENV: string;
  API_URL: string;
}

class ConfigService {
  private envVariables: EnvVariables;

  constructor() {
    this.envVariables = {
      NODE_ENV: process.env.NODE_ENV || "development",
      API_URL: process.env.REACT_API_URL || "http://localhost:5000/graphql",
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
}

const instance = new ConfigService();

export default instance;
