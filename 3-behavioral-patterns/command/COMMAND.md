# COMMAND PATTERN

## What is the Command design pattern?

The Command Design Pattern is a behavioral design pattern that encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations. This pattern decouples the sender of a request from its receiver, enabling features like undo/redo operations, logging, and transaction management.

### Key Concepts of Command Design Pattern

1. **Command Interface**: This interface declares a method for executing a command (often called `execute`).

2. **Concrete Command**: This class implements the Command interface and defines the binding between a receiver and an action.

3. **Receiver**: This is the object that knows how to perform the operations associated with the command.

4. **Invoker**: This class is responsible for calling the command to execute. It holds a command and triggers it without knowing the details of the execution.

5. **Client**: This is the part of the application that creates a command object and associates it with a receiver.

### When to Use the Command Pattern

- When you need to parameterize objects with operations.
- When you need to queue or log requests.
- When you want to support undoable operations.

### Example

Here's a simple example where we have a remote control that can turn on and off a light.

#### Step 1: Define the Command Interface

```typescript
interface ICommand {
  execute(): void;
  undo(): void;
}
```

#### Step 2: Implement the Receiver

```typescript
class Light {
  public on(): void {
    console.log('The light is ON');
  }

  public off(): void {
    console.log('The light is OFF');
  }
}
```

#### Step 3: Implement Concrete Commands

```typescript
class LightOnCommand implements ICommand {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.on();
  }

  public undo(): void {
    this.light.off();
  }
}

class LightOffCommand implements ICommand {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  public execute(): void {
    this.light.off();
  }

  public undo(): void {
    this.light.on();
  }
}
```

#### Step 4: Implement the Invoker

```typescript
class RemoteControl {
  private command: ICommand | null = null;

  public setCommand(command: ICommand): void {
    this.command = command;
  }

  public pressButton(): void {
    this.command?.execute();
  }

  public pressUndo(): void {
    this.command?.undo();
  }
}
```

#### Step 5: Using the Command Pattern

```typescript
function clientCode() {
  const light = new Light();
  const lightOn: ICommand = new LightOnCommand(light);
  const lightOff: ICommand = new LightOffCommand(light);

  const remote = new RemoteControl();

  // Turn the light ON
  remote.setCommand(lightOn);
  remote.pressButton(); // The light is ON

  // Turn the light OFF
  remote.setCommand(lightOff);
  remote.pressButton(); // The light is OFF

  // Undo the last command (turning the light back ON)
  remote.pressUndo(); // The light is ON
}

clientCode();
```

### Explanation of the code above

1. **Command Interface**: The `ICommand` interface defines the `execute` and `undo` methods.
2. **Receiver**: The `Light` class contains the actual implementation for turning the light on and off.
3. **Concrete Commands**: `LightOnCommand` and `LightOffCommand` implement the `ICommand` interface and bind the actions to the `Light` receiver.
4. **Invoker**: The `RemoteControl` class is responsible for executing and undoing commands without needing to know their specifics.
5. **Client Code**: Demonstrates creating commands and using the remote control to execute and undo actions.

### Benefits of Using Command Pattern

- **Decoupling**: The invoker does not need to know about the receiver or the specifics of the command.
- **Flexibility**: You can easily add new commands without changing existing code.
- **Support for Undo/Redo**: The pattern naturally supports undoable operations by keeping track of commands.

### Summary

The Command Design Pattern is a powerful tool for managing operations in a flexible and decoupled manner. It allows for the implementation of features like undo/redo, queuing, and logging, making it especially useful in applications that require robust command handling.
