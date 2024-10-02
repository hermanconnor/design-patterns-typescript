import { IceCream } from './interfaces';

export class StrawberryIceCream implements IceCream {
  flavor = 'Strawberry';

  message() {
    console.log(`You chose ${this.flavor} ice cream!`);
  }
}
