import { Language } from "../generated";

import { LanguageOption } from "./../types";

export * from "./global-state.constant";
export * from "./regex.constant";
export * from "./auth.constant";

interface ConstantsValues {
  PARAM: string;
  DEFAULT_LANGUAGE: Language;
  SUPPORTED_LANGUAGES: LanguageOption[];
}

const PARAM = "{DICTIONARY_PARAM}";
const DEFAULT_LANGUAGE: Language = Language.Spanish;
const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { label: "global.languagePrefix.es", value: Language.Spanish },
  { label: "global.languagePrefix.en", value: Language.English },
];

const Constants: ConstantsValues = {
  PARAM,
  DEFAULT_LANGUAGE,
  SUPPORTED_LANGUAGES,
};

export { Constants };
