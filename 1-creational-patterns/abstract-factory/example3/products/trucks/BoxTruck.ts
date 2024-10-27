import { ITruck } from '../../interfaces/Truck';

export class BoxTruck implements ITruck {
  haul(): void {
    console.log('Hauling with a Box Truck.');
  }
}
