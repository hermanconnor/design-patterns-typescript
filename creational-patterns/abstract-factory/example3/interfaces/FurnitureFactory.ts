import IChair from './Chair';
import ISofa from './Sofa';

export default interface IFurnitureFactory {
  createChair(): IChair;
  createSofa(): ISofa;
}
