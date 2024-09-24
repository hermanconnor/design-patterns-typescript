import IChair from '../interfaces/Chair';
import IFurnitureFactory from '../interfaces/FurnitureFactory';
import ISofa from '../interfaces/Sofa';
import VictorianChair from '../products/victorian/VictorianChair';
import VictorianSofa from '../products/victorian/VictorianSofa';

export default class VictorianFurnitureFactory implements IFurnitureFactory {
  createChair(): IChair {
    return new VictorianChair();
  }

  createSofa(): ISofa {
    return new VictorianSofa();
  }
}
