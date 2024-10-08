import Ticket from './Ticket';

export enum Severity {
  LOW,
  MEDIUM,
  HIGH,
}

export interface ISupportHandler {
  setNext(handler: ISupportHandler): ISupportHandler;
  handle(ticket: Ticket): void;
}
