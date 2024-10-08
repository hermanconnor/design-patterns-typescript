import AdvancedSupport from './AdvancedSupport';
import BasicSupport from './BasicSupport';
import IntermediateSupport from './IntermediateSupport';
import Ticket from './Ticket';
import { Severity } from './types';

// Client Code
const basicSupport = new BasicSupport();
const intermediateSupport = new IntermediateSupport();
const advancedSupport = new AdvancedSupport();

// Setting up the chain
basicSupport.setNext(intermediateSupport).setNext(advancedSupport);

// Example tickets
const tickets = [
  new Ticket(Severity.LOW, 'Password reset request.'),
  new Ticket(
    Severity.MEDIUM,
    'Account locked due to multiple failed attempts.',
  ),
  new Ticket(Severity.HIGH, 'System outage affecting all users.'),
  new Ticket(Severity.LOW, 'General inquiry about service.'),
];

// Processing the tickets
tickets.forEach((ticket) => {
  basicSupport.handle(ticket);
});
