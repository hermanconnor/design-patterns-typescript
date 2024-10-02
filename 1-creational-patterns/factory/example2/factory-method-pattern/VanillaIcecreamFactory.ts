import { IceCreamFactory } from './IceCreamFactory';
import VanillaIceCream from './Vanilla';

export default class VanillaIceCreamFactory extends IceCreamFactory {
  createIceCream() {
    return new VanillaIceCream();
  }
}
