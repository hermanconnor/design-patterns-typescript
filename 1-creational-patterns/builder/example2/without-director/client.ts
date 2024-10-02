import ConcretePizzaBuilder from './ConcretePizzaBuilder';

const builder = new ConcretePizzaBuilder();

// Construct a Margherita Pizza
builder.setSize('Medium');
builder.addCheese();
const margheritaPizza = builder.build();
console.log(margheritaPizza.describe());

// Construct a Pepperoni Pizza
builder.setSize('Large');
builder.addCheese();
builder.addPepperoni();
const pepperoniPizza = builder.build();
console.log(pepperoniPizza.describe());
