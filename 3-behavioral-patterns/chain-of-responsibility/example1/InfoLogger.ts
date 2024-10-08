import BaseLogger from './BaseLogger';
import { LogLevel } from './types';

// Concrete Logger

class InfoLogger extends BaseLogger {
  log(level: LogLevel, message: string): void {
    if (level === LogLevel.INFO) {
      console.log(`INFO: ${message}`);
    } else {
      super.log(level, message);
    }
  }
}

export default InfoLogger;
