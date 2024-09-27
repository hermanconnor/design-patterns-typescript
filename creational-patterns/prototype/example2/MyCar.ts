import { ICar } from './types';

export default class MyCar implements ICar {
  constructor(
    public make: string,
    public model: string,
    public year: number,
    public features: string[],
  ) {}

  clone(deep: boolean = false): ICar {
    if (deep) {
      return structuredClone(this);
    } else {
      return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
  }
}
