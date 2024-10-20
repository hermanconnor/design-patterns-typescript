import { IMessagingStrategy } from './interfaces';

// Concrete Strategies

class EmailMessaging implements IMessagingStrategy {
  sendMessage(recipient: string, message: string): void {
    console.log(`Sending email to ${recipient}: ${message}`);
  }
}

export default EmailMessaging;
