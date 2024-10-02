import EmailNotification from './EmailNotification';
import {
  FormattingDecorator,
  NotificationLoggingDecorator,
} from './notification.decorators';
import { INotification } from './notification.interface';
import SMSNotification from './SMSNotification';

function main() {
  // Basic Email Notification
  let emailNotification: INotification = new EmailNotification();
  emailNotification.send('Hello, User!');

  // Email Notification with Logging
  emailNotification = new NotificationLoggingDecorator(emailNotification);
  emailNotification.send('Hello, User!');

  // Email Notification with Formatting
  emailNotification = new FormattingDecorator(emailNotification);
  emailNotification.send('Hello, User!');

  // Basic SMS Notification
  let smsNotification: INotification = new SMSNotification();
  smsNotification.send('Your code is 1234');

  // SMS Notification with Logging
  smsNotification = new NotificationLoggingDecorator(smsNotification);
  smsNotification.send('Your code is 1234');

  // SMS Notification with Formatting
  smsNotification = new FormattingDecorator(smsNotification);
  smsNotification.send('Your code is 1234');
}

main();
