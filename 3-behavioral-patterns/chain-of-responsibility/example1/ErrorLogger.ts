import BaseLogger from './BaseLogger';
import { LogLevel } from './types';

// Concrete Loggers

class ErrorLogger extends BaseLogger {
  log(level: LogLevel, message: string): void {
    if (level === LogLevel.ERROR) {
      console.error(`ERROR: ${message}`);
    } else {
      super.log(level, message);
    }
  }
}

export default ErrorLogger;
