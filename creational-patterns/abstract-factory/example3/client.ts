import ModernFurnitureFactory from './factories/ModernFurnitureFactory';
import VictorianFurnitureFactory from './factories/VictorianFurnitureFactory';
import IFurnitureFactory from './interfaces/FurnitureFactory';

function clientCode(factory: IFurnitureFactory) {
  const chair = factory.createChair();
  const sofa = factory.createSofa();

  console.log(chair.sitOn());
  console.log(sofa.lieOn());
}

const modernFactory = new ModernFurnitureFactory();
clientCode(modernFactory);

const victorianFactory = new VictorianFurnitureFactory();
clientCode(victorianFactory);
