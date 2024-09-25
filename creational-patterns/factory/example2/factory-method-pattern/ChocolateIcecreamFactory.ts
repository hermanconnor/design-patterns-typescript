import { IceCreamFactory } from './IceCreamFactory';
import ChocolateIceCream from './Chocolate';

export default class ChocolateIceCreamFactory extends IceCreamFactory {
  createIceCream() {
    return new ChocolateIceCream();
  }
}
