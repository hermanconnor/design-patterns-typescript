import ErrorLogger from './ErrorLogger';
import InfoLogger from './InfoLogger';
import WarningLogger from './WarningLogger';
import { LogLevel } from './types';

/**
 In this example, we have a logging system that processes log messages. There are different loggers for different severity levels, such as `InfoLogger`, `WarningLogger`, and `ErrorLogger`. Each logger only processes messages that are relevant to its severity level.

Explanation of the implementation:
  1. Log Levels: An enum (`LogLevel`) is defined to represent different severity levels for logs.

  2. ILogger Interface: This defines the methods for setting the next logger in the chain and for logging messages.

  3. BaseLogger Class: This abstract class implements the common logic for chaining loggers. It has a `setNext` method to establish the chain and a `log` method to pass messages to the next logger.

  4. Concrete Loggers: Each concrete logger (e.g., `InfoLogger`, `WarningLogger`, `ErrorLogger`) extends the `BaseLogger` and implements the logic for handling specific log levels. If a logger cannot handle a message, it passes it to the next logger in the chain.

  5. Client Code: In the client code, instances of the loggers are created, and the chain is established. Then, various log messages are processed, demonstrating how each logger handles only its relevant messages.
 */

// Client Code
const infoLogger = new InfoLogger();
const warningLogger = new WarningLogger();
const errorLogger = new ErrorLogger();

// Setting up the chain
infoLogger.setNext(warningLogger).setNext(errorLogger);

// Example logging
const logMessages = [
  { level: LogLevel.INFO, message: 'This is an info message.' },
  { level: LogLevel.WARNING, message: 'This is a warning message.' },
  { level: LogLevel.ERROR, message: 'This is an error message.' },
  { level: LogLevel.INFO, message: 'Another info message.' },
];

logMessages.forEach((log) => {
  infoLogger.log(log.level, log.message);
});
