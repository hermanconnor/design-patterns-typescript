import { ICarBuilder } from './interfaces';

export default class CarDirector {
  private builder: ICarBuilder;

  constructor(builder: ICarBuilder) {
    this.builder = builder;
  }

  constructSportsCar() {
    return this.builder.setWheels(4).setEngine('V8').setColor('Red').build();
  }
}
