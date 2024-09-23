import IceCream from './definitions';
import Chocolate from './Chocolate';
import Vanilla from './Vanilla';
import Strawberry from './Strawberry';

export default class IceCreamFactory {
  constructor() {}

  // BASIC EXAMPLE
  //
  // public static createIcecream = (flavor: string): IceCream | null => {
  //   switch (flavor.toLowerCase()) {
  //     case 'chocolate':
  //       return new Chocolate();
  //     case 'vanilla':
  //       return new Vanilla();
  //     case 'strawberry':
  //       return new Strawberry();
  //     default:
  //       return null;
  //     // handle case where flavor not supported
  //     // or maybe throw an error if flavor is not supported
  //   }
  // };

  // If we wanted to extend our application with more flavors.
  // Implementing a data-driven approach using a map or configuration object can make your factory method more scalable and maintainable as the flavor list grows.

  // map of flavors to their respective constructors
  //
  private static flavors: Record<string, new () => IceCream> = {
    chocolate: Chocolate,
    vanilla: Vanilla,
    strawberry: Strawberry,
  };

  public static createIcecream = (flavor: string): IceCream | null => {
    const FlavorClass = IceCreamFactory.flavors[flavor.toLowerCase()];

    if (FlavorClass) {
      return new FlavorClass();
    } else {
      return null; // or throw an error if flavor is not supported
    }
  };
}
