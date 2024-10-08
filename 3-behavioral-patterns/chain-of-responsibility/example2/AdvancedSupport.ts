import BaseSupportHandler from './BaseSupportHandler';
import Ticket from './Ticket';
import { Severity } from './types';

// Concrete Handlers

class AdvancedSupport extends BaseSupportHandler {
  handle(ticket: Ticket): void {
    if (ticket.severity === Severity.HIGH) {
      console.log(`Advanced Support: Handling ticket: ${ticket.message}`);
    } else {
      console.log(
        `Ticket with severity ${ticket.severity} could not be handled.`,
      );
    }
  }
}

export default AdvancedSupport;
