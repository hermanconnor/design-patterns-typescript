import { ICar } from './Car';
import { ITruck } from './Truck';

export interface IVehicleFactory {
  createCar(): ICar;
  createTruck(): ITruck;
}
