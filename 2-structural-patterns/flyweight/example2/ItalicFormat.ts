import { ITextFormat } from './interfaces';

// STEP 2: Create Concrete Flyweight Classes

class ItalicFormat implements ITextFormat {
  constructor(private color: string, private fontSize: number) {}

  apply(extrinsicState: { content: string }): void {
    console.log(
      `Applying Italic Format [Color: ${this.color}, Font Size: ${this.fontSize}] to: ${extrinsicState.content}`,
    );
  }
}

export default ItalicFormat;
