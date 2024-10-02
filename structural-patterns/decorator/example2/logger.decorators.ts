import { ILogger } from './logger.interface';

abstract class LoggerDecorator implements ILogger {
  protected logger: ILogger;

  constructor(logger: ILogger) {
    this.logger = logger;
  }

  log(message: string): void {
    this.logger.log(message);
  }
}

export class TimestampLogger extends LoggerDecorator {
  constructor(logger: ILogger) {
    super(logger);
  }

  log(message: string): void {
    const timestamp = new Date().toISOString();

    super.log(`[${timestamp}] ${message}`);
  }
}

export class LogLevelLogger extends LoggerDecorator {
  private level: string;

  constructor(logger: ILogger, level: string) {
    super(logger);
    this.level = level;
  }

  log(message: string): void {
    super.log(`[${this.level}] ${message}`);
  }
}
