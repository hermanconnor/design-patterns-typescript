import BaseSupportHandler from './BaseSupportHandler';
import Ticket from './Ticket';
import { Severity } from './types';

// Concrete Handlers

class BasicSupport extends BaseSupportHandler {
  handle(ticket: Ticket): void {
    if (ticket.severity === Severity.LOW) {
      console.log(`Basic Support: Handling ticket: ${ticket.message}`);
    } else {
      super.handle(ticket);
    }
  }
}

export default BasicSupport;
