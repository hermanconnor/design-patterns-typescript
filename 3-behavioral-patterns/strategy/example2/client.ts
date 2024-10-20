import EmailMessaging from './EmailMessaging';
import MessageSender from './MessageSender';
import PushNotificationMessaging from './PushNotificationMessaging';
import SMSMessaging from './SMSMessaging';

// Create a message sender with email messaging
const sender = new MessageSender(new EmailMessaging());
sender.send('bond007@example.com', 'Hello via Email!');

// Switch to SMS messaging
sender.setMessagingStrategy(new SMSMessaging());
sender.send('123-456-7890', 'Hello via SMS!');

// Switch to Push Notification messaging
sender.setMessagingStrategy(new PushNotificationMessaging());
sender.send('jamesbond007', 'Hello via Push Notification!');
