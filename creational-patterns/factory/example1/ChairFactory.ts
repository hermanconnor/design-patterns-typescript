import BigChair from './BigChair';
import MediumChair from './MediumChair';
import SmallChair from './SmallChair';
import { IChair } from './Chair';

export default class ChairFactory {
  constructor() {}

  static getChair = (chairType: string): IChair => {
    if (chairType.toLowerCase() === 'big') {
      return new BigChair();
    } else if (chairType.toLowerCase() === 'medium') {
      return new MediumChair();
    } else {
      return new SmallChair();
    }
  };
}
