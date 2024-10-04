import { INotificationChannel } from './interface';

// Concrete Implementor 1: Email
export class EmailChannel implements INotificationChannel {
  sendNotification(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}

// Concrete Implementor 2: SMS
export class SMSChannel implements INotificationChannel {
  sendNotification(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

// Concrete Implementor 3: Push Notification
export class PushNotificationChannel implements INotificationChannel {
  sendNotification(message: string): void {
    console.log(`Sending Push Notification: ${message}`);
  }
}
