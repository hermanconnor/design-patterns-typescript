import BlackFridayDiscount from './BlackFridayDiscount';
import DigitalProduct from './DigitalProduct';
import { IProduct } from './interfaces';
import PhysicalProduct from './PhysicalProduct';
import SeasonalDiscount from './SeasonalDiscount';
import Service from './Service';

// CLIENT
const products: IProduct[] = [
  new PhysicalProduct('Laptop', 1000),
  new DigitalProduct('E-book', 20),
  new Service('Consulting', 300),
];

const blackFridayDiscount = new BlackFridayDiscount();
const seasonalDiscount = new SeasonalDiscount();

console.log('Applying Black Friday Discounts:');
products.forEach((product) => product.accept(blackFridayDiscount));

console.log('\nApplying Seasonal Discounts:');
products.forEach((product) => product.accept(seasonalDiscount));
