import CarDirector from './CarDirector';
import SportsCarBuilder from './SportsCarBuilder';

const builder = new SportsCarBuilder();
const director = new CarDirector(builder);
const sportsCar = director.constructSportsCar();

console.log(sportsCar.specifications());
