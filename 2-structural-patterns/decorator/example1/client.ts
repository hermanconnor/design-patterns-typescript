import SimpleCoffee from './SimpleCoffee';
import { MilkDecorator, SugarDecorator } from './decorators';

function main() {
  let myCoffee = new SimpleCoffee();
  console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);

  myCoffee = new MilkDecorator(myCoffee);
  console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);

  myCoffee = new SugarDecorator(myCoffee);
  console.log(`${myCoffee.description()} costs $${myCoffee.cost()}`);
}

main();
