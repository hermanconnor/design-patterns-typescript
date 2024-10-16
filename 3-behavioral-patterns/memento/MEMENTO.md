# MEMENTO PATTERN

## What is the Memento design pattern?

The Memento design pattern is a behavioral design pattern that allows an object to capture its internal state and save it outside of its own class, enabling the object to be restored to that state later. This is useful for implementing features like undo/redo functionality, version control, or maintaining history without exposing the details of the object's implementation.

### Key Components

1. **Originator**: The class whose state needs to be saved and restored. It creates a memento containing a snapshot of its current state.

2. **Memento**: The object that stores the internal state of the Originator. It usually has no methods to alter the state, ensuring the encapsulation of the Originator's state.

3. **Caretaker**: The class responsible for managing the mementos. It keeps track of the mementos and can restore the Originator's state when needed.

### Characteristics

- **Encapsulation**: The Memento pattern preserves the encapsulation of the Originator. External objects cannot manipulate the Memento's state directly.
- **Undo/Redo Capability**: It enables the implementation of undo and redo functionalities without exposing the internal state.

- **State Management**: Useful for state management in applications that require history tracking.

### When to Use

- When you need to implement undo/redo functionality.
- When an object's state needs to be saved and restored independently of its interface.
- When you want to capture an object's state at a specific point in time.

### Example

Here’s a simple example of the Memento pattern.

```typescript
// Memento class
class Memento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  public getState(): string {
    return this.state;
  }
}

// Originator class
class Originator {
  private state!: string;

  public setState(state: string): void {
    console.log(`Setting state to: ${state}`);
    this.state = state;
  }

  public getState(): string {
    return this.state;
  }

  public saveStateToMemento(): Memento {
    console.log(`Saving state: ${this.state}`);
    return new Memento(this.state);
  }

  public restoreStateFromMemento(memento: Memento): void {
    this.state = memento.getState();
    console.log(`Restored state: ${this.state}`);
  }
}

// Caretaker class
class Caretaker {
  private mementoList: Memento[] = [];

  public add(memento: Memento): void {
    this.mementoList.push(memento);
  }

  public get(index: number): Memento {
    return this.mementoList[index];
  }
}

// Example usage
const originator = new Originator();
const caretaker = new Caretaker();

// Setting initial state
originator.setState('State 1');
caretaker.add(originator.saveStateToMemento());

// Changing state
originator.setState('State 2');
caretaker.add(originator.saveStateToMemento());

// Changing state again
originator.setState('State 3');
caretaker.add(originator.saveStateToMemento());

// Restoring to previous states
originator.restoreStateFromMemento(caretaker.get(0)); // Restores to State 1
originator.restoreStateFromMemento(caretaker.get(1)); // Restores to State 2
```

### Explanation of the above code

1. **Memento**: Stores the state of the Originator.
2. **Originator**: Has methods to set its state, save its state to a Memento, and restore its state from a Memento.
3. **Caretaker**: Manages the saved states, storing them in an array and providing access to specific Mementos.

### Summary

The Memento pattern is a powerful way to manage state without exposing internal details.
