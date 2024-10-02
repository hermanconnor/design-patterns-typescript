import { INotification } from './notification.interface';

export default class SMSNotification implements INotification {
  send(message: string): void {
    console.log(`SMS sent: ${message}`);
  }
}
