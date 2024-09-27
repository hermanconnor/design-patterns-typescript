import { IPizzaBuilder } from './interfaces';

export default class PizzaDirector {
  private builder: IPizzaBuilder;

  constructor(builder: IPizzaBuilder) {
    this.builder = builder;
  }

  makeMargheritaPizza() {
    this.builder.setSize('Medium');
    this.builder.addCheese();
  }

  makePepperoniPizza() {
    this.builder.setSize('Large');
    this.builder.addCheese();
    this.builder.addPepperoni();
  }
}
