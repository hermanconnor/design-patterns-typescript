import { IObserver } from './interfaces';

// Concrete Observer: Stock Display

class StockDisplay implements IObserver {
  update(stockLevel: number): void {
    console.log(`Stock level updated: ${stockLevel} items in stock.`);
  }
}

export default StockDisplay;
