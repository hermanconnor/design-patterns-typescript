import { ICarBuilder } from './interfaces';

export default class SportsCarBuilder implements ICarBuilder {
  private car: Car;

  constructor() {
    this.car = new Car();
  }

  setWheels(wheels: number): this {
    this.car.wheels = wheels;
    return this;
  }

  setEngine(engine: string): this {
    this.car.engine = engine;
    return this;
  }

  setColor(color: string): this {
    this.car.color = color;
    return this;
  }

  build(): Car {
    return this.car;
  }
}
