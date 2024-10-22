import DigitalProduct from './DigitalProduct';
import PhysicalProduct from './PhysicalProduct';
import Service from './Service';

//  Define the Visitor Interface

export interface IProductVisitor {
  visitPhysicalProduct(product: PhysicalProduct): void;
  visitDigitalProduct(product: DigitalProduct): void;
  visitService(product: Service): void;
}

// Define the Product Interface

export interface IProduct {
  accept(visitor: IProductVisitor): void;
}
