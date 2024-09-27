import Car from './Car';

export interface ICarBuilder {
  setWheels(wheels: number): this;
  setEngine(engine: string): this;
  setColor(color: string): this;
  build(): Car;
}
