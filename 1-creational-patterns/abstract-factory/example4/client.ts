import { IVehicleFactory } from './interfaces/VehicleFactory';
import { AmericanVehicleFactory } from './factories/AmericanVehicleFactory';
import { EuropeanVehicleFactory } from './factories/EuropeanVehicleFactory';
import { VehicleShowroom } from './VehicleShowroom';

function main() {
  let factory: IVehicleFactory;
  const isAmericanMarket = true; // Simulating a condition

  if (isAmericanMarket) {
    factory = new AmericanVehicleFactory();
  } else {
    factory = new EuropeanVehicleFactory();
  }

  const showroom = new VehicleShowroom(factory);
  showroom.displayVehicles();
}

main();
