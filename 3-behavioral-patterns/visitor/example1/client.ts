import AreaCalculator from './AreaCalculator';
import Circle from './Circle';
import { IShape } from './interfaces';
import PerimeterCalculator from './PerimeterCalculator';
import Rectangle from './Rectangle';

const shapes: IShape[] = [new Circle(5), new Rectangle(4, 6)];

const areaCalculator = new AreaCalculator();
const perimeterCalculator = new PerimeterCalculator();

shapes.forEach((shape) => {
  shape.accept(areaCalculator);
  shape.accept(perimeterCalculator);
});

/**
In this example, different shapes (like circles and rectangles) can be visited to calculate their area and perimeter.
 
Explanation
  1. Visitor Interface: The `IShapeVisitor` interface defines methods to visit different shape types.

  2. IShape Interface: The `accept` method allows visitors to perform operations on shapes.

  3. Concrete Shapes:
    - `Circle` implements the `IShape` interface and provides methods to calculate its area and perimeter.
    - `Rectangle` similarly implements the `IShape` interface.

  4. Concrete Visitors:
    - `AreaCalculator` and `PerimeterCalculator` implement the `IShapeVisitor` interface, providing specific logic for calculating area and perimeter of the shapes.

  5. Client Code: We create a list of shapes and use the visitors to calculate and print the area and perimeter for each shape.
 */
