import { ITextFormat } from './interfaces';
import BoldFormat from './BoldFormat';
import ItalicFormat from './ItalicFormat';
import UnderlineFormat from './UnderlineFormat';

// STEP 3: Create the Flyweight Factory

class TextFormatFactory {
  private formats: { [key: string]: ITextFormat } = {};

  getTextFormat(type: string, color: string, fontSize: number): ITextFormat {
    const key = `${type}_${color}_${fontSize}`;

    if (!this.formats[key]) {
      if (type === 'bold') {
        this.formats[key] = new BoldFormat(color, fontSize);
      } else if (type === 'italic') {
        this.formats[key] = new ItalicFormat(color, fontSize);
      } else if (type === 'underline') {
        this.formats[key] = new UnderlineFormat(color, fontSize);
      }
    }

    return this.formats[key];
  }
}

export default TextFormatFactory;
