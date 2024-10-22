import { IShape, IShapeVisitor } from './interfaces';

// Create Concrete Shapes

class Rectangle implements IShape {
  constructor(public width: number, public height: number) {}

  accept(visitor: IShapeVisitor): void {
    visitor.visitRectangle(this);
  }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

export default Rectangle;
