import {
  EmailChannel,
  PushNotificationChannel,
  SMSChannel,
} from './implementors';
import {
  AlertNotification,
  ReminderNotification,
} from './refined.abstractions';

/**
 * In this example, we have a notification system for a web application. This system needs to send notifications to users through various channels, such as email, SMS, and push notifications.
 
      In this example:
        - The `NotificationChannel` interface defines a method for sending notifications.
        - The `EmailChannel`, `SMSChannel`, and `PushNotificationChannel` are concrete implementations providing specific notification delivery methods.
        - The `Notification` class is the abstraction that utilizes the `NotificationChannel`.
        - The `AlertNotification` and `ReminderNotification` classes extend the `Notification` abstraction to implement the specific `notify` method.
 */

function clientCode() {
  const emailChannel = new EmailChannel();
  const smsChannel = new SMSChannel();
  const pushChannel = new PushNotificationChannel();

  const alertEmail = new AlertNotification(emailChannel);
  const reminderSMS = new ReminderNotification(smsChannel);
  const alertPush = new AlertNotification(pushChannel);

  alertEmail.notify('Server is down!');
  reminderSMS.notify('Meeting at 11 AM.');
  alertPush.notify('New user signup!');
}

clientCode();
