import Circle from './Circle';
import { IShapeVisitor } from './interfaces';
import Rectangle from './Rectangle';

// Create Concrete Visitors

class AreaCalculator implements IShapeVisitor {
  visitCircle(circle: Circle): void {
    console.log(`Circle Area: ${circle.area()}`);
  }

  visitRectangle(rectangle: Rectangle): void {
    console.log(`Rectangle Area: ${rectangle.area()}`);
  }
}

export default AreaCalculator;
