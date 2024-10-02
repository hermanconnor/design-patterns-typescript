import { Dimensions } from '../dimensions';

export interface IChair {
  name: string;
  height: number;
  width: number;
  depth: number;

  getDimensions(): Readonly<Dimensions>;
}

export default class Chair implements IChair {
  name: string;
  height: number;
  width: number;
  depth: number;

  constructor(name = '', height = 0, width = 0, depth = 0) {
    this.name = name;
    this.height = height;
    this.width = width;
    this.depth = depth;
  }

  getDimensions(): Readonly<Dimensions> {
    return {
      width: this.width,
      height: this.height,
      depth: this.depth,
    };
  }
}
