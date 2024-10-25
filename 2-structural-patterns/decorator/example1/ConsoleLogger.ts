import { ILogger } from './logger.interface';

export default class ConsoleLogger implements ILogger {
  log(message: string): void {
    console.log(message);
  }
}
