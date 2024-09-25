import { IShape } from './interfaces';
import ShapeFactory from './ShapeFactory';
import Square from './Square';

export default class SquareFactory extends ShapeFactory {
  createShape(): IShape {
    return new Square();
  }
}
