import { Dimensions } from './dimensions';

export interface IChair {
  height: number;
  width: number;
  depth: number;
  getDimensions(): Readonly<Dimensions>;
}

export default class Chair implements IChair {
  height = 0;
  width = 0;
  depth = 0;

  getDimensions(): Readonly<Dimensions> {
    return {
      height: this.height,
      width: this.width,
      depth: this.depth,
    };
  }
}
