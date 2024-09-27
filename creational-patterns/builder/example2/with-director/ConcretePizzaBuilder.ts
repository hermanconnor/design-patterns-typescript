import { IPizzaBuilder } from './interfaces';
import Pizza from './Pizza';

export default class ConcretePizzaBuilder implements IPizzaBuilder {
  private pizza: Pizza = new Pizza();

  setSize(size: string): void {
    this.pizza.setSize(size);
  }

  addCheese(): void {
    this.pizza.addCheese();
  }

  addPepperoni(): void {
    this.pizza.addPepperoni();
  }

  addMushrooms(): void {
    this.pizza.addMushrooms();
  }

  build(): Pizza {
    return this.pizza;
  }
}
