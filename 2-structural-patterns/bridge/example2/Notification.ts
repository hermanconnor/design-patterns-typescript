import { INotificationChannel } from './interface';

abstract class Notification {
  protected channel: INotificationChannel;

  constructor(channel: INotificationChannel) {
    this.channel = channel;
  }

  abstract notify(message: string): void; // Implemented in refined abstractions
}

export default Notification;
