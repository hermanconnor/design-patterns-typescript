import CircleFactory from './shapes/CircleFactory';
import ShapeFactory from './shapes/ShapeFactory';
import SquareFactory from './shapes/SquareFactory';

function clientCode(factory: ShapeFactory) {
  const shape = factory.createShape();
  shape.draw();
}

const circleFactory = new CircleFactory();
clientCode(circleFactory);

const squareFactory = new SquareFactory();
clientCode(squareFactory);
