import { IMessagingStrategy } from './interfaces';

// Concrete Strategies

class PushNotificationMessaging implements IMessagingStrategy {
  sendMessage(recipient: string, message: string): void {
    console.log(`Sending Push Notification to ${recipient}: ${message}`);
  }
}

export default PushNotificationMessaging;
