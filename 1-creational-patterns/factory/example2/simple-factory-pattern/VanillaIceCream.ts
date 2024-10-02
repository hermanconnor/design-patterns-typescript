import { IceCream } from './interfaces';

export class VanillaIceCream implements IceCream {
  flavor = 'Vanilla';

  message() {
    console.log(`You chose ${this.flavor} ice cream!`);
  }
}
