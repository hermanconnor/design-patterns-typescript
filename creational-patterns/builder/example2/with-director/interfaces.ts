import Pizza from './Pizza';

export interface IPizzaBuilder {
  setSize(size: string): void;
  addCheese(): void;
  addPepperoni(): void;
  addMushrooms(): void;
  build(): Pizza;
}
