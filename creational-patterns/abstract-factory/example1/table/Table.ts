import { Dimensions } from '../dimensions';

export interface ITable {
  name: string;
  height: number;
  width: number;
  depth: number;

  getDimensions(): Readonly<Dimensions>;
}

export default class Table implements ITable {
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
      height: this.height,
      width: this.width,
      depth: this.depth,
    };
  }
}
