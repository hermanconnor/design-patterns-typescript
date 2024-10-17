import TextMemento from './TextMemento';

// Originator class

class TextEditor {
  private content: string = '';

  public setContent(content: string): void {
    this.content = content;
    console.log(`Current content: ${this.content}`);
  }

  public getContent(): string {
    return this.content;
  }

  public save(): TextMemento {
    console.log(`Saving content: ${this.content}`);
    return new TextMemento(this.content);
  }

  public restore(memento: TextMemento): void {
    this.content = memento.getContent();
    console.log(`Restored content: ${this.content}`);
  }
}

export default TextEditor;
