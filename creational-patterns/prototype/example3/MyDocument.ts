import { CloneMode, IPrototype } from './types';

export default class MyDocument implements IPrototype {
  name: string;
  arr: [number[], number[]];

  constructor(name: string, arr: [number[], number[]]) {
    this.name = name;
    this.arr = arr;
  }

  clone(mode: CloneMode): MyDocument {
    let copiedArray: [number[], number[]];

    if (mode === 2) {
      // Perform a deep copy of the array
      copiedArray = structuredClone(this.arr);
    } else {
      // Perform a shallow copy of the array
      copiedArray = [this.arr[0], this.arr[1]];
    }

    return new MyDocument(this.name, copiedArray);
  }
}
