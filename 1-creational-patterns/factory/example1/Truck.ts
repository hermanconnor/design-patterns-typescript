import { IVehicle } from './interfaces';

class Truck implements IVehicle {
  drive(): void {
    console.log('Driving a truck');
  }
}

export default Truck;
