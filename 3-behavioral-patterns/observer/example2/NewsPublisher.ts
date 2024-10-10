import { IObserver } from './interfaces';

// Subject Class

class NewsPublisher {
  private subscribers: IObserver[] = [];
  private articles: string[] = [];

  // Method to add a subscriber
  addSubscriber(subscriber: IObserver): void {
    this.subscribers.push(subscriber);
  }

  // Method to remove a subscriber
  removeSubscriber(subscriber: IObserver): void {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber);
  }

  // Method to notify all subscribers
  notifySubscribers(article: string): void {
    for (const subscriber of this.subscribers) {
      subscriber.update(article);
    }
  }

  // Method to publish a new article
  publishArticle(article: string): void {
    this.articles.push(article);
    this.notifySubscribers(article);
  }
}

export default NewsPublisher;
