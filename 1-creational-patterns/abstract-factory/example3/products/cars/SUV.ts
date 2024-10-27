import { ICar } from '../../interfaces/Car';

export class SUV implements ICar {
  drive(): void {
    console.log('Driving an SUV.');
  }
}
