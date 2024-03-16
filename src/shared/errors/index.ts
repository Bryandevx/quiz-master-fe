import { ErrorType } from "../types/error.type";

export class EmptyCacheError extends Error {}

export class AlertError extends Error {
  type: ErrorType;

  constructor(type: ErrorType) {
    super();

    Object.setPrototypeOf(this, new.target.prototype);

    this.type = type;
  }
}
