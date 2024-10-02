import { IceCream } from './types';

export default class ChocolateIceCream implements IceCream {
  flavor = 'Chocolate';

  message(): void {
    console.log(`You chose ${this.flavor} ice cream!`);
  }
}
