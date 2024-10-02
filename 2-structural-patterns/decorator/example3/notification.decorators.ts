import { INotification } from './notification.interface';

abstract class NotificationDecorator implements INotification {
  protected notification: INotification;

  constructor(notification: INotification) {
    this.notification = notification;
  }

  send(message: string): void {
    this.notification.send(message);
  }
}

export class NotificationLoggingDecorator extends NotificationDecorator {
  send(message: string): void {
    console.log(`Logging: ${message}`);
    super.send(message);
  }
}

export class FormattingDecorator extends NotificationDecorator {
  send(message: string): void {
    const formattedMessage = `*** ${message} ***`;
    super.send(formattedMessage);
  }
}
