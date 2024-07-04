import IceCream from './definitions';
import Chocolate from './Chocolate';
import Vanilla from './Vanilla';
import Strawberry from './Strawberry';

export default class IceCreamFactory {
  constructor() {}

  public static createIcecream = (flavor: string): IceCream | null => {
    switch (flavor.toLowerCase()) {
      case 'chocolate':
        return new Chocolate();
      case 'vanilla':
        return new Vanilla();
      case 'strawberry':
        return new Strawberry();
      default:
        return null;
      // handle case where flavor not supported
      // or maybe throw an error if flavor is not supported
    }
  };
}
