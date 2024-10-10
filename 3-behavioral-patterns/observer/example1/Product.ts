import { IObserver } from './interfaces';

// Subject Class

class Product {
  private observers: IObserver[] = [];
  private stockLevel: number = 0;

  // Method to add an observer
  addObserver(observer: IObserver): void {
    this.observers.push(observer);
  }

  // Method to remove an observer
  removeObserver(observer: IObserver): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Method to notify all observers
  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.stockLevel);
    }
  }

  // Method to set stock level and notify observers
  setStockLevel(newStockLevel: number): void {
    this.stockLevel = newStockLevel;
    this.notifyObservers();
  }
}

export default Product;
