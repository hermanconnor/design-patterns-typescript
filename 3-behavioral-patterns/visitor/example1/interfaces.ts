import Circle from './Circle';
import Rectangle from './Rectangle';

// Define the Visitor Interface

export interface IShapeVisitor {
  visitCircle(circle: Circle): void;
  visitRectangle(rectangle: Rectangle): void;
}

// Define the Shape Interface

export interface IShape {
  accept(visitor: IShapeVisitor): void;
}
