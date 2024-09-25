import { IceCream } from './types';

export default class ChocolateIceCream implements IceCream {
  flavor(): string {
    return 'Chocolate Ice Cream';
  }
}
