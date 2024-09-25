import { IceCream } from './types';

export default class VanillaIceCream implements IceCream {
  flavor(): string {
    return 'Vanilla Ice Cream';
  }
}
