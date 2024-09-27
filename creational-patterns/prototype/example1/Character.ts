import { IPrototype } from './types';

export default class Character implements IPrototype {
  constructor(public name: string, public health: number) {}

  // SHALLOW CLONE for this simple example
  clone(): this {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
}
