import BigChair from './BigChair';
import MediumChair from './MediumChair';
import SmallChair from './SmallChair';
import { IChair } from './Chair';

export default class ChairFactory {
  public static getChair(chairType: string): IChair {
    if (chairType.toLowerCase() === 'big chair') {
      return new BigChair();
    } else if (chairType.toLowerCase() === 'medium chair') {
      return new MediumChair();
    } else if (chairType.toLowerCase() === 'small chair') {
      return new SmallChair();
    } else {
      throw new Error('No Chair Found');
    }
  }
}
