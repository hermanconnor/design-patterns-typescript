// STEP 1: Define the Flyweight Interface

export interface ICharacter {
  display(extrinsicState: { x: number; y: number; health: number }): void;
}
