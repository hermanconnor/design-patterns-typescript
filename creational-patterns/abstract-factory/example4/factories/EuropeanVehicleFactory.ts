import { ICar } from '../interfaces/Car';
import { ITruck } from '../interfaces/Truck';
import { IVehicleFactory } from '../interfaces/VehicleFactory';
import { SUV } from '../products/cars/SUV';
import { BoxTruck } from '../products/trucks/BoxTruck';

export class EuropeanVehicleFactory implements IVehicleFactory {
  createCar(): ICar {
    return new SUV();
  }

  createTruck(): ITruck {
    return new BoxTruck();
  }
}
