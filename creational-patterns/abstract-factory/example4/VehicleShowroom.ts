import { ICar } from './interfaces/Car';
import { ITruck } from './interfaces/Truck';
import { IVehicleFactory } from './interfaces/VehicleFactory';

export class VehicleShowroom {
  private car: ICar;
  private truck: ITruck;

  constructor(factory: IVehicleFactory) {
    this.car = factory.createCar();
    this.truck = factory.createTruck();
  }

  displayVehicles(): void {
    this.car.drive();
    this.truck.haul();
  }
}
