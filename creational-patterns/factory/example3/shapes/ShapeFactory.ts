import { IShape } from './interfaces';

export default abstract class ShapeFactory {
  abstract createShape(): IShape;
}
