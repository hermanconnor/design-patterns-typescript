import ConsoleLogger from './ConsoleLogger';
import { LogLevelLogger, TimestampLogger } from './logger.decorators';
import { ILogger } from './logger.interface';

function main() {
  let logger: ILogger = new ConsoleLogger();

  // Log a simple message
  logger.log('This is a simple log message.');

  // Add timestamp
  logger = new TimestampLogger(logger);
  logger.log('This log message includes a timestamp.');

  // Add log level
  logger = new LogLevelLogger(logger, 'INFO');
  logger.log('This log message includes a timestamp and log level.');
}

main();
