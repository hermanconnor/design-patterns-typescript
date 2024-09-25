import { IceCream } from './interfaces';
import { ChocolateIceCream } from './ChocolateIceCream';
import { VanillaIceCream } from './VanillaIceCream';
import { StrawberryIceCream } from './StrawberryIceCream';

export default class IceCreamFactory {
  static createIceCream(flavor: string): IceCream | null {
    switch (flavor.toLowerCase()) {
      case 'vanilla':
        return new VanillaIceCream();
      case 'chocolate':
        return new ChocolateIceCream();
      case 'strawberry':
        return new StrawberryIceCream();
      default:
        return null;
    }
  }
}
