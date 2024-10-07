import { ICommand } from './interfaces';
import TextEditor from './TextEditor';

// STEP 3: Create Concrete Command classes
class AddTextCommand implements ICommand {
  private editor: TextEditor;
  private text: string;

  constructor(editor: TextEditor, text: string) {
    this.editor = editor;
    this.text = text;
  }

  execute(): void {
    this.editor.addText(this.text);
  }

  undo(): void {
    this.editor.removeText(this.text.length);
  }
}

export default AddTextCommand;
