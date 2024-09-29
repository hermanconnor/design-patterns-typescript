import MyDocument from './MyDocument';

export type CloneMode = 1 | 2; // Mode 1 for shallow copy, Mode 2 for deep copy

export interface IPrototype {
  clone(mode: CloneMode): MyDocument;
}
