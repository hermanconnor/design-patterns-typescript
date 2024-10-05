import TextFormatFactory from './TextFormatFactory';

// STEP 4: Use the Flyweights in the Text Editor

class TextEditor {
  private factory: TextFormatFactory = new TextFormatFactory();

  createDocument(): void {
    const segments = [
      { type: 'bold', color: 'red', fontSize: 12, content: 'Hello, World!' },
      {
        type: 'italic',
        color: 'blue',
        fontSize: 14,
        content: 'This is italic text.',
      },
      {
        type: 'underline',
        color: 'green',
        fontSize: 10,
        content: 'This is underlined.',
      },
      {
        type: 'bold',
        color: 'red',
        fontSize: 12,
        content: 'Another bold segment.',
      },
      {
        type: 'italic',
        color: 'blue',
        fontSize: 14,
        content: 'Another italic segment.',
      },
    ];

    segments.forEach(({ type, color, fontSize, content }) => {
      const format = this.factory.getTextFormat(type, color, fontSize);

      format.apply({ content });
    });
  }
}

export default TextEditor;
