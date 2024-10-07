import { ICommand } from './interfaces';
import TextEditor from './TextEditor';

// STEP 3: Create Concrete Command classes

class RemoveTextCommand implements ICommand {
  private editor: TextEditor;
  private length: number;

  constructor(editor: TextEditor, length: number) {
    this.editor = editor;
    this.length = length;
  }

  execute(): void {
    this.editor.removeText(this.length);
  }

  undo(): void {
    const removedText = this.editor.getContent().slice(-this.length);

    this.editor.addText(removedText);
  }
}

export default RemoveTextCommand;
