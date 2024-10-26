import Car from './Car';
import Truck from './Truck';
import { IVehicle } from './interfaces';

class VehicleFactory {
  static createVehicle(type: string): IVehicle {
    switch (type.toLowerCase()) {
      case 'car':
        return new Car();
      case 'truck':
        return new Truck();
      default:
        throw new Error('Vehicle type not recognized');
    }
  }
}

export default VehicleFactory;
