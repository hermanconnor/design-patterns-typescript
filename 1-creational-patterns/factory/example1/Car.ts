import { IVehicle } from './interfaces';

class Car implements IVehicle {
  drive(): void {
    console.log('Driving a car');
  }
}

export default Car;
