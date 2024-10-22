import { IProduct, IProductVisitor } from './interfaces';

// Create Concrete Products

class DigitalProduct implements IProduct {
  constructor(public name: string, public price: number) {}

  accept(visitor: IProductVisitor): void {
    visitor.visitDigitalProduct(this);
  }
}

export default DigitalProduct;
