// STEP 2: Create the Receiver class

class TextEditor {
  private content: string = '';

  addText(text: string): void {
    this.content += text;
    console.log(`Text added: "${text}"`);
  }

  removeText(length: number): void {
    const removedText = this.content.slice(-length);

    this.content = this.content.slice(0, -length);
    console.log(`Text removed: "${removedText}"`);
  }

  getContent(): string {
    return this.content;
  }
}

export default TextEditor;
