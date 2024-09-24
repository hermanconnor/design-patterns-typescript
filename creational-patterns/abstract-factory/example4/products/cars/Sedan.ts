import { ICar } from '../../interfaces/Car';

export class Sedan implements ICar {
  drive(): void {
    console.log('Driving a Sedan.');
  }
}
