// STEP 1: Define the Complex Classes

export default class NotificationService {
  sendNotification(userId: number, message: string): void {
    console.log(`Notification sent to user ${userId}: ${message}`);
  }
}
