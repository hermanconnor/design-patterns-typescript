import IceCreamType from './definitions';

export default class IceCream implements IceCreamType {
  constructor(public flavor: string) {}

  public message = () => {
    return `You chose ${this.flavor} flavor.`;
  };
}
