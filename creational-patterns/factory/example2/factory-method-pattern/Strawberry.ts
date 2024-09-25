import { IceCream } from './types';

export class StrawberryIceCream implements IceCream {
  flavor(): string {
    return 'Strawberry Ice Cream';
  }
}
