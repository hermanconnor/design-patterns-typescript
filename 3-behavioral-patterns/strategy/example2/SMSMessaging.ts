import { IMessagingStrategy } from './interfaces';

// Concrete Strategies

class SMSMessaging implements IMessagingStrategy {
  sendMessage(recipient: string, message: string): void {
    console.log(`Sending SMS to ${recipient}: ${message}`);
  }
}

export default SMSMessaging;
