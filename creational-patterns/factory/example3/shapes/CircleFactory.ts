import { IShape } from './interfaces';
import Circle from './Circle';
import ShapeFactory from './ShapeFactory';

export default class CircleFactory extends ShapeFactory {
  createShape(): IShape {
    return new Circle();
  }
}
