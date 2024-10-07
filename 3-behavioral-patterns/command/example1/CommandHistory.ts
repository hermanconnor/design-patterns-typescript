import { ICommand } from './interfaces';

// STEP 4: Create the Invoker class

class CommandHistory {
  private history: ICommand[] = [];
  private undone: ICommand[] = [];

  executeCommand(command: ICommand): void {
    command.execute();
    this.history.push(command);
    this.undone = []; // Clear redo stack on new command
  }

  undo(): void {
    const command = this.history.pop();

    if (command) {
      command.undo();
      this.undone.push(command);
    } else {
      console.log('No command to undo.');
    }
  }

  redo(): void {
    const command = this.undone.pop();

    if (command) {
      command.execute();
      this.history.push(command);
    } else {
      console.log('No command to redo.');
    }
  }
}

export default CommandHistory;
