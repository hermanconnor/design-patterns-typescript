import SmallTable from './SmallTable';
import MediumTable from './MediumTable';
import BigTable from './BigTable';
import { ITable } from './Table';

export default class TableFactory {
  public static getTable(tableType: string): ITable {
    if (tableType.toLowerCase() === 'big table') {
      return new BigTable();
    } else if (tableType.toLowerCase() === 'medium table') {
      return new MediumTable();
    } else if (tableType.toLowerCase() === 'small table') {
      return new SmallTable();
    } else {
      throw new Error('No Chair Found');
    }
  }
}
