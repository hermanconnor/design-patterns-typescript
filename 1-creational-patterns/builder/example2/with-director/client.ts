import ConcretePizzaBuilder from './ConcretePizzaBuilder';
import PizzaDirector from './PizzaDirector';

const builder = new ConcretePizzaBuilder();
const director = new PizzaDirector(builder);

director.makeMargheritaPizza();
const margheritaPizza = builder.build();
console.log(margheritaPizza.describe());

builder.build(); // Reset builder for next pizza
director.makePepperoniPizza();
const pepperoniPizza = builder.build();
console.log(pepperoniPizza.describe());
