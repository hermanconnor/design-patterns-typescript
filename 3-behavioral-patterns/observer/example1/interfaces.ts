// Observer Interface

export interface IObserver {
  update(stockLevel: number): void;
}
