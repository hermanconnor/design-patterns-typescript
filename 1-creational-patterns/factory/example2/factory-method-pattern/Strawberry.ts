import { IceCream } from './types';

export class StrawberryIceCream implements IceCream {
  flavor = 'Strawberry';

  message(): void {
    console.log(`You chose ${this.flavor} ice cream!`);
  }
}
