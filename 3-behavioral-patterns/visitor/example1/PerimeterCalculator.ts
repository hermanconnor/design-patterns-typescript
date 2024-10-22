import Circle from './Circle';
import { IShapeVisitor } from './interfaces';
import Rectangle from './Rectangle';

// Create Concrete Visitors

class PerimeterCalculator implements IShapeVisitor {
  visitCircle(circle: Circle): void {
    console.log(`Circle Perimeter: ${circle.perimeter()}`);
  }

  visitRectangle(rectangle: Rectangle): void {
    console.log(`Rectangle Perimeter: ${rectangle.perimeter()}`);
  }
}

export default PerimeterCalculator;
