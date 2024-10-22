import { IProduct, IProductVisitor } from './interfaces';

// Create Concrete Products

class PhysicalProduct implements IProduct {
  constructor(public name: string, public price: number) {}

  accept(visitor: IProductVisitor): void {
    visitor.visitPhysicalProduct(this);
  }
}

export default PhysicalProduct;
