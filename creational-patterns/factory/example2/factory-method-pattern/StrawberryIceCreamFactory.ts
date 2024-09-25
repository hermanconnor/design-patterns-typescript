import { IceCreamFactory } from './IceCreamFactory';
import { StrawberryIceCream } from './Strawberry';

export default class StrawberryIceCreamFactory extends IceCreamFactory {
  createIceCream() {
    return new StrawberryIceCream();
  }
}
