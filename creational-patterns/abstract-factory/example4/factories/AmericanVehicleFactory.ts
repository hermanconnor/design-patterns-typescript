import { IVehicleFactory } from '../interfaces/VehicleFactory';
import { ICar } from '../interfaces/Car';
import { ITruck } from '../interfaces/Truck';
import { Sedan } from '../products/cars/Sedan';
import { Pickup } from '../products/trucks/Pickup';

export class AmericanVehicleFactory implements IVehicleFactory {
  createCar(): ICar {
    return new Sedan();
  }

  createTruck(): ITruck {
    return new Pickup();
  }
}
