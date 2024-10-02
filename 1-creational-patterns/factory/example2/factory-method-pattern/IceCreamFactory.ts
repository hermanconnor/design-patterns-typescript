import { IceCream } from './types';

export abstract class IceCreamFactory {
  abstract createIceCream(): IceCream;
}
