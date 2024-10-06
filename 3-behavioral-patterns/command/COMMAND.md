# COMMAND PATTERN

## What is the Command pattern?

The Command Pattern is a behavioral design pattern that turns a request into a stand-alone object. This object contains all the information needed to perform the action, including the method to call, the object that owns the method, and any parameters. This encapsulation allows you to parameterize methods with different requests, delay the execution of a command, and even queue requests or log them.

### Key Concepts

1. **Command**: An interface that declares a method for executing a command.
2. **Concrete Command**: Implements the Command interface and defines the binding between a receiver and an action.
3. **Receiver**: The object that performs the actual work when the command's execute method is called.
4. **Invoker**: The object that asks the command to execute the action. It can be a button in a UI, for instance.
5. **Client**: The object that creates a command and associates it with a receiver.

### Benefits

- **Decoupling**: The sender (invoker) and the receiver are decoupled, allowing for flexibility in command execution.
- **Undo/Redo functionality**: Commands can be stored, allowing for easy undo and redo operations.
- **Logging**: Commands can be logged for auditing or debugging purposes.

### Implementation Steps

1. **Define a Command interface**.
2. **Create Concrete Command classes** that implement the Command interface.
3. **Define a Receiver class** that contains the actual business logic.
4. **Create an Invoker class** that can execute commands.
5. **Client code** to set everything up.

### Example

Here is a simple example:

1. **Define a Command interface**.

```typescript
interface ICommand {
  execute(): void;
}
```

2. **Define a Receiver class**

```typescript
class Receiver {
  public executeTask1(): void {
    console.log('Executing Task 1');
  }

  public executeTask2(): void {
    console.log('Executing Task 2');
  }
}
```

3. **Create Concrete Command classes**

```typescript
class Command1 implements ICommand {
  private receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.executeTask1();
  }
}

class Command2 implements ICommand {
  private receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  execute(): void {
    this.receiver.executeTask2();
  }
}
```

4. **Create an Invoker class**

```typescript
class Invoker {
  private commands: Map<string, ICommand>;

  constructor() {
    this.commands = new Map<string, ICommand>();
  }

  register(commandName: string, command: ICommand): void {
    // Register commands in the Invoker
    this.commands.set(commandName, command);
  }

  execute(commandName: string): void {
    // Execute any registered commands
    const command = this.commands.get(commandName);

    if (command) {
      command.execute();
    } else {
      console.error(`Command [${commandName}] not recognized.`);
    }
  }
}
```

5. **Client code**

```typescript
const receiver = new Receiver();

// Create Commands
const command1 = new Command1(receiver);
const command2 = new Command2(receiver);

// Register the commands with the invoker
const invoker = new Invoker();
invoker.register('1', command1);
invoker.register('2', command2);

// Execute the commands that are registered on the Invoker
invoker.execute('1'); // Executes Task 1
invoker.execute('2'); // Executes Task 2
invoker.execute('3'); // Command not recognized
```

### Explanation of the above code

1. **Command Interface**: The `ICommand` interface defines a single method, `execute()`, which must be implemented by all concrete command classes. This establishes a common contract for executing commands.

2. **Receiver Class**: The `Receiver` class contains the actual logic to perform specific tasks. It has methods `executeTask1()` and `executeTask2()`, which are responsible for carrying out the corresponding tasks when called.

3. **Concrete Command Classes**: The `Command1` and `Command2` classes implement the `ICommand` interface. Each class has a reference to a `Receiver` instance. `Command1` calls `executeTask1()` on the `Receiver`, while `Command2` calls `executeTask2()`. This encapsulates the commands and allows for invoking specific actions on the receiver.

4. **Invoker Class**: The `Invoker` class manages a collection of commands. It uses a `Map` to store commands associated with string keys (command names). The `register()` method allows commands to be added to the invoker, and the `execute()` method retrieves and executes the command associated with a given key. If the command is not found, it logs an error message.

5. **Client Code**: In the client code, an instance of `Receiver` is created. Two command instances (`command1` and `command2`) are created and associated with the `Receiver`. An instance of `Invoker` is created, and the commands are registered using string keys. The client then calls the `execute()` method on the `Invoker` with different keys to trigger the associated commands. This demonstrates how to execute tasks without knowing the specifics of how they are performed.

### When to Use

- When you need to parameterize objects by an action to perform.
- When you want to queue operations, schedule tasks, or implement logging.
- When you need support for undoable operations.

### Summary

The Command Pattern is a powerful way to encapsulate actions as objects. It promotes loose coupling and flexibility in your code design.
