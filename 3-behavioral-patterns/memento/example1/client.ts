import History from './History';
import TextEditor from './TextEditor';

/**
In this example, we model a simple text editor that allows users to undo and redo their text changes.
 
Explanation
  1. TextMemento: Holds the content of the text editor at a specific point in time.

  2. TextEditor: The main class where users edit their text. It has methods to set content, save the current state to a `TextMemento`, and restore from a `TextMemento`.

  3. History: Manages the list of mementos, allowing for undo and redo operations. It keeps track of the current position in the history stack.

  - The user sets content in the text editor, and each state is saved in the history.
  - When the user wants to undo changes, the last saved state is retrieved and restored.
  - The user can also redo changes, bringing back the state after an undo operation.
 */

const editor = new TextEditor();
const history = new History();

// User makes changes
editor.setContent('Hello, 007!');
history.save(editor.save());

editor.setContent('Hello, Moneypenny!');
history.save(editor.save());

editor.setContent('Hello, Q!');
history.save(editor.save());

// Undo the last change
const mementoUndo1 = history.undo();
if (mementoUndo1) {
  editor.restore(mementoUndo1);
}

// Undo again
const mementoUndo2 = history.undo();
if (mementoUndo2) {
  editor.restore(mementoUndo2);
}

// Redo the last change
const mementoRedo1 = history.redo();
if (mementoRedo1) {
  editor.restore(mementoRedo1);
}
