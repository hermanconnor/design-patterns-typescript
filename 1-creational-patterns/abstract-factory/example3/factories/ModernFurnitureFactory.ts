import IChair from '../interfaces/Chair';
import IFurnitureFactory from '../interfaces/FurnitureFactory';
import ISofa from '../interfaces/Sofa';
import ModernChair from '../products/modern/ModernChair';
import ModernSofa from '../products/modern/ModernSofa';

export default class ModernFurnitureFactory implements IFurnitureFactory {
  createChair(): IChair {
    return new ModernChair();
  }

  createSofa(): ISofa {
    return new ModernSofa();
  }
}
