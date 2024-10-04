import Notification from './Notification';

// Refined Abstraction 1: Alert Notification
export class AlertNotification extends Notification {
  notify(message: string): void {
    console.log('Alert Notification:');
    this.channel.sendNotification(message);
  }
}

// Refined Abstraction 2: Reminder Notification
export class ReminderNotification extends Notification {
  notify(message: string): void {
    console.log('Reminder Notification:');
    this.channel.sendNotification(message);
  }
}
