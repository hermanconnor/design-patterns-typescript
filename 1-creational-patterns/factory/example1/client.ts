import { IVehicle } from './interfaces';
import VehicleFactory from './VehicleFactory';

const car: IVehicle = VehicleFactory.createVehicle('car');
car.drive(); // Output: Driving a car

const truck: IVehicle = VehicleFactory.createVehicle('truck');
truck.drive(); // Output: Driving a truck
