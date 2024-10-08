export enum LogLevel {
  INFO,
  WARNING,
  ERROR,
}

// Handler interface
export interface ILogger {
  setNext(logger: ILogger): ILogger;
  log(level: LogLevel, message: string): void;
}
