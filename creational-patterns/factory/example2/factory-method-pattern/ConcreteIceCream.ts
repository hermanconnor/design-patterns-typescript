import IceCream from './types';

export default class ConcreteIceCream implements IceCream {
  constructor(public flavor: string) {}

  public message = () => {
    return `You chose ${this.flavor} flavor.`;
  };
}
