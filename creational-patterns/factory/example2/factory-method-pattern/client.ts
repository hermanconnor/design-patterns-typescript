import { IceCreamFactory } from './IceCreamFactory';
import ChocolateIceCreamFactory from './ChocolateIcecreamFactory';
import VanillaIceCreamFactory from './VanillaIcecreamFactory';
import StrawberryIceCreamFactory from './StrawberryIceCreamFactory';

function clientCode(factory: IceCreamFactory) {
  const iceCream = factory.createIceCream();
  console.log(iceCream.flavor());
}

const chocolateFactory = new ChocolateIceCreamFactory();
clientCode(chocolateFactory);

const vanillaFactory = new VanillaIceCreamFactory();
clientCode(vanillaFactory);

const strawberryFactory = new StrawberryIceCreamFactory();
clientCode(strawberryFactory);
