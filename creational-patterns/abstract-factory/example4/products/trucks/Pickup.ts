import { ITruck } from '../../interfaces/Truck';

export class Pickup implements ITruck {
  haul(): void {
    console.log('Hauling with a Pickup Truck.');
  }
}
