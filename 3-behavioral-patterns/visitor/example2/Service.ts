import { IProduct, IProductVisitor } from './interfaces';

// Create Concrete Products

class Service implements IProduct {
  constructor(public name: string, public price: number) {}

  accept(visitor: IProductVisitor): void {
    visitor.visitService(this);
  }
}

export default Service;
