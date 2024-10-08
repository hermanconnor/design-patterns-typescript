import IChair from './interfaces/Chair';
import IFurnitureFactory from './interfaces/FurnitureFactory';
import ISofa from './interfaces/Sofa';

export default class FurnitureShowroom {
  private chair: IChair;
  private sofa: ISofa;

  constructor(factory: IFurnitureFactory) {
    this.chair = factory.createChair();
    this.sofa = factory.createSofa();
  }

  displayFurniture(): void {
    console.log(this.chair.sitOn());
    console.log(this.sofa.lieOn());
  }
}
