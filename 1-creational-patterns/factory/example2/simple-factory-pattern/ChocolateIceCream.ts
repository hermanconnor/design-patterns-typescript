import { IceCream } from './interfaces';

export class ChocolateIceCream implements IceCream {
  flavor = 'Chocolate';

  message() {
    console.log(`You chose ${this.flavor} ice cream!`);
  }
}
