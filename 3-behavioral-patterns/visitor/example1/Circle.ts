import { IShape, IShapeVisitor } from './interfaces';

// Create Concrete Shapes

class Circle implements IShape {
  constructor(public radius: number) {}

  accept(visitor: IShapeVisitor): void {
    visitor.visitCircle(this);
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

export default Circle;
