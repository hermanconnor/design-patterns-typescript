import Logger from './Logger';

// Usage
const logger1 = Logger.getInstance();
logger1.log('This is the first log message.');

const logger2 = Logger.getInstance();
logger2.log('This is the second log message.');

console.log(logger1 === logger2); // true, both are the same instance
