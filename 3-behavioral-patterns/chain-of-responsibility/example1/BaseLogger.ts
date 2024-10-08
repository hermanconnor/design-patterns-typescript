import { ILogger, LogLevel } from './types';

// Base Logger class
abstract class BaseLogger implements ILogger {
  private nextLogger?: ILogger;

  setNext(logger: ILogger): ILogger {
    this.nextLogger = logger;
    return logger;
  }

  log(level: LogLevel, message: string): void {
    if (this.nextLogger) {
      this.nextLogger.log(level, message);
    }
  }
}

export default BaseLogger;
