import ChairFactory from './chair/ChairFactory';
import { IChair } from './chair/Chair';

interface IFurniture extends IChair {}

export default class FurnitureFactory {
  public static getFurniture(furnitureType: string): IFurniture | undefined {
    if (['small chair', 'medium chair', 'big chair'].includes(furnitureType)) {
      return ChairFactory.getChair(furnitureType);
    }

    console.error('No Factory Found for furniture type:', furnitureType);
    return undefined;
  }
}
