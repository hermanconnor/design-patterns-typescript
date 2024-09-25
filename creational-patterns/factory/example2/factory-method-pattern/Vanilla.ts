import { IceCream } from './types';

export default class VanillaIceCream implements IceCream {
  flavor = 'Vanilla';

  message(): void {
    console.log(`You chose ${this.flavor} ice cream!`);
  }
}
