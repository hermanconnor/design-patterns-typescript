import { INotification } from './notification.interface';

export default class EmailNotification implements INotification {
  send(message: string): void {
    console.log(`Email sent: ${message}`);
  }
}
