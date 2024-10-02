import { ICoffee } from './interfaces';

abstract class CoffeeDecorator implements ICoffee {
  protected coffee: ICoffee;

  constructor(coffee: ICoffee) {
    this.coffee = coffee;
  }

  abstract cost(): number;
  abstract description(): string;
}

export class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 1; // Adding the cost of milk
  }

  description(): string {
    return this.coffee.description() + ', with Milk';
  }
}

export class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return this.coffee.cost() + 0.5; // Adding the cost of sugar
  }

  description(): string {
    return this.coffee.description() + ', with Sugar';
  }
}
