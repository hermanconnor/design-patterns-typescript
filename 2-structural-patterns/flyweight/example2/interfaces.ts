// STEP 1: Define the Flyweight Interface

export interface ITextFormat {
  apply(extrinsicState: { content: string }): void;
}
