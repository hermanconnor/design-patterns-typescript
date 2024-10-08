import BaseSupportHandler from './BaseSupportHandler';
import Ticket from './Ticket';
import { Severity } from './types';

// Concrete Handlers

class IntermediateSupport extends BaseSupportHandler {
  handle(ticket: Ticket): void {
    if (ticket.severity === Severity.MEDIUM) {
      console.log(`Intermediate Support: Handling ticket: ${ticket.message}`);
    } else {
      super.handle(ticket);
    }
  }
}

export default IntermediateSupport;
