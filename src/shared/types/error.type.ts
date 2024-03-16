export enum ErrorType {
  INVALID_CREDENTIALS = "NotAuthorizedException",
  VERSION_MISMATCH = "VersionMismatchException",
  USER_ALREADY_EXISTS = "UsernameExistsException",
  EMAIL_ALREADY_EXISTS = "EmailExistsException",
  USER_NOT_CONFIRMED = "UserNotConfirmedException",
  LIMIT_EXCEEDED = "LimitExceededException",
  EXPIRED_CODE = "ExpiredCodeException",
  CODE_MISMATCH = "CodeMismatchException",
  DEFAULT = "defaultError",
}
