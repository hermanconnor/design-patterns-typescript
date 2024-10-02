import SportsCarBuilder from './SportsCarBuilder';

const builder = new SportsCarBuilder();
const sportsCar = builder.setWheels(4).setEngine('V8').setColor('Red').build();

console.log(sportsCar.specifications());
