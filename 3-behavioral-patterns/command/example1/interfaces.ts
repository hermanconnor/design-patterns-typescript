// STEP 1: Define the Command interface

export interface ICommand {
  execute(): void;
  undo(): void;
}
