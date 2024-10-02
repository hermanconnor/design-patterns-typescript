import { IShape } from './interfaces';

export default class Square implements IShape {
  draw() {
    console.log('Drawing a Square');
  }
}
