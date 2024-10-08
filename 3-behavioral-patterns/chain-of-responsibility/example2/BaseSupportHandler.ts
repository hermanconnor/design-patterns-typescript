import Ticket from './Ticket';
import { ISupportHandler } from './types';

abstract class BaseSupportHandler implements ISupportHandler {
  private nextHandler?: ISupportHandler;

  setNext(handler: ISupportHandler): ISupportHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(ticket: Ticket): void {
    if (this.nextHandler) {
      this.nextHandler.handle(ticket);
    }
  }
}

export default BaseSupportHandler;
