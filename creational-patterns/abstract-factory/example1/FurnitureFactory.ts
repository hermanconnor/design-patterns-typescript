import ChairFactory from './chair/ChairFactory';
import TableFactory from './table/TableFactory';
import { IChair } from './chair/Chair';
import { ITable } from './table/Table';

interface IFurniture extends IChair, ITable {}

export default class FurnitureFactory {
  public static getFurniture(furnitureType: string): IFurniture | undefined {
    if (['small chair', 'medium chair', 'big chair'].includes(furnitureType)) {
      return ChairFactory.getChair(furnitureType);
    }

    if (['small table', 'medium table', 'big table'].includes(furnitureType)) {
      return TableFactory.getTable(furnitureType);
    }

    console.error('No Factory Found for furniture type:', furnitureType);
    return undefined;
  }
}
