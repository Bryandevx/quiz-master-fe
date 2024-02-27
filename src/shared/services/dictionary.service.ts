import { Language } from '../generated';

import { LanguageDictionary} from '../types';

class DictionaryService {

  parseLanguageToDictionaryField(language: Language): keyof LanguageDictionary {
    return ({
      [Language.English]: 'en',
      [Language.Spanish]: 'es',
    })[language] as keyof LanguageDictionary;
  }


  
//   parseErrorTypeToDictionaryField(errorType: ErrorType): keyof ErrorTypeDictionary {
//     return ({
//       [ErrorType.INVALID_CREDENTIALS]: 'notAuthorizedException',
//       [ErrorType.VERSION_MISMATCH]: 'versionMismatchException',
//       [ErrorType.USER_ALREADY_EXISTS]: 'usernameExistsException',      
//       [ErrorType.EMAIL_ALREADY_EXISTS]: 'emailExistsException',      
//       [ErrorType.USER_NOT_CONFIRMED]: 'userNotConfirmedException',
//       [ErrorType.LIMIT_EXCEEDED]: 'limitExceededException',
//       [ErrorType.EXPIRED_CODE]: 'expiredCodeException',
//       [ErrorType.CODE_MISMATCH]: 'codeMismatchException',
//       [ErrorType.DEFAULT]: 'defaultError',
//     })[errorType] as keyof ErrorTypeDictionary;
//   }

  // TODO: IMPLEMENT ENUMS LEVEL , STATUS , ROLE...

}

const instance = new DictionaryService();

export default instance;