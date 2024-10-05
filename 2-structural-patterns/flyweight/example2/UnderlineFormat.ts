import { ITextFormat } from './interfaces';

// STEP 2: Create Concrete Flyweight Classes

class UnderlineFormat implements ITextFormat {
  constructor(private color: string, private fontSize: number) {}

  apply(extrinsicState: { content: string }): void {
    console.log(
      `Applying Underline Format [Color: ${this.color}, Font Size: ${this.fontSize}] to: ${extrinsicState.content}`,
    );
  }
}

export default UnderlineFormat;
