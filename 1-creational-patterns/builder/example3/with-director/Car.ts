export default class Car {
  public wheels: number = 0;
  public engine: string = '';
  public color: string = '';

  public specifications(): string {
    return `Car with ${this.wheels} wheels, engine: ${this.engine}, color: ${this.color}`;
  }
}
