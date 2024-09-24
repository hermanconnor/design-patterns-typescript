import ModernFurnitureFactory from './factories/ModernFurnitureFactory';
import VictorianFurnitureFactory from './factories/VictorianFurnitureFactory';
import FurnitureShowroom from './FurnitureShowroom';
import IFurnitureFactory from './interfaces/FurnitureFactory';

function main() {
  let factory: IFurnitureFactory;

  // Simulate a condition to choose a factory
  const isModernStyle = true; // Change this to false for Victorian style

  if (isModernStyle) {
    factory = new ModernFurnitureFactory();
  } else {
    factory = new VictorianFurnitureFactory();
  }

  const showroom = new FurnitureShowroom(factory);
  showroom.displayFurniture();
}

main();
