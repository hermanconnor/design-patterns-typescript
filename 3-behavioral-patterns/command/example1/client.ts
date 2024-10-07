import AddTextCommand from './AddTextCommand';
import CommandHistory from './CommandHistory';
import TextEditor from './TextEditor';

// Step 5: Client code
const editor = new TextEditor();
const commandHistory = new CommandHistory();

const addHello = new AddTextCommand(editor, 'Hello ');
const addWorld = new AddTextCommand(editor, 'World!');

commandHistory.executeCommand(addHello);
commandHistory.executeCommand(addWorld);
console.log(editor.getContent()); // Output: "Hello World!"

commandHistory.undo();
console.log(editor.getContent()); // Output: "Hello "

commandHistory.redo();
console.log(editor.getContent()); // Output: "Hello World!"
