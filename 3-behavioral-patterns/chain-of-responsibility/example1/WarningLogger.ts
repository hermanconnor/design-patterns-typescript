import BaseLogger from './BaseLogger';
import { LogLevel } from './types';

// Concrete Loggers

class WarningLogger extends BaseLogger {
  log(level: LogLevel, message: string): void {
    if (level === LogLevel.WARNING) {
      console.log(`WARNING: ${message}`);
    } else {
      super.log(level, message);
    }
  }
}

export default WarningLogger;
