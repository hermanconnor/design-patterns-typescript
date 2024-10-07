import { ICommand } from './interfaces';

// Step 4: Create the Invoker class

class RemoteControl {
  private commandHistory: ICommand[] = [];
  private undoneCommands: ICommand[] = [];

  executeCommand(command: ICommand): void {
    command.execute();
    this.commandHistory.push(command);
    this.undoneCommands = []; // Clear redo stack
  }

  undo(): void {
    const command = this.commandHistory.pop();

    if (command) {
      command.undo();
      this.undoneCommands.push(command);
    } else {
      console.log('No command to undo.');
    }
  }

  redo(): void {
    const command = this.undoneCommands.pop();

    if (command) {
      command.execute();
      this.commandHistory.push(command);
    } else {
      console.log('No command to redo.');
    }
  }

  scheduleCommand(command: ICommand, delay: number): void {
    setTimeout(() => {
      this.executeCommand(command);
    }, delay);
  }
}

export default RemoteControl;
