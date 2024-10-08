import { Severity } from './types';

// Ticket class

class Ticket {
  constructor(public severity: Severity, public message: string) {}
}

export default Ticket;
