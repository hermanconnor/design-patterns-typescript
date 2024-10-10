import { IObserver } from './interfaces';

// Concrete Observer: Email Notification

class EmailNotification implements IObserver {
  private threshold: number;

  constructor(threshold: number) {
    this.threshold = threshold;
  }

  update(stockLevel: number): void {
    if (stockLevel < this.threshold) {
      console.log(
        `Email Notification: Stock is low! Only ${stockLevel} items left.`,
      );
    }
  }
}

export default EmailNotification;
