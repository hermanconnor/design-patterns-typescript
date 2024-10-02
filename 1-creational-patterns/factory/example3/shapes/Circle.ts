import { IShape } from './interfaces';

export default class Circle implements IShape {
  draw() {
    console.log('Drawing a Circle');
  }
}
