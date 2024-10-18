# STATE PATTERN

## What is the State design pattern?

The State design pattern is a behavioral design pattern that allows an object to change its behavior when its internal state changes. The object will appear to change its class. This pattern is particularly useful for managing the states of an object, making the code more manageable and scalable.

### Key Concepts

1. **Context**: This is the class that maintains a reference to a State instance. It delegates state-specific behavior to the current State object.

2. **State Interface**: This defines the methods that concrete state classes must implement.

3. **Concrete States**: These are classes that implement the State interface, defining the behavior specific to each state.

### When to Use the State Pattern

- When an object can be in one of several states and its behavior depends on its state.
- When you want to avoid a large number of conditionals that switch based on the current state.
- When the states have distinct behaviors that can be encapsulated in separate classes.

### Benefits

- **Single Responsibility Principle**: Each state is encapsulated in its own class, following SRP.
- **Open/Closed Principle**: You can introduce new states without changing existing code.
- **Easy State Management**: States are managed independently, leading to cleaner code.

### Example

Here's a simple example of the State pattern.

```typescript
// State interface
interface State {
  publish(document: TextDocument): void;
  moderate(document: TextDocument): void;
  draft(document: TextDocument): void;
}

// Concrete states
class DraftState implements State {
  publish(document: TextDocument): void {
    console.log('Publishing the document...');
    document.setState(new PublishedState());
  }

  moderate(document: TextDocument): void {
    console.log('Document is in draft mode. It cannot be moderated.');
  }

  draft(document: TextDocument): void {
    console.log('Document is already in draft mode.');
  }
}

class ModerationState implements State {
  publish(document: TextDocument): void {
    console.log('Document is being published after moderation.');
    document.setState(new PublishedState());
  }

  moderate(document: TextDocument): void {
    console.log('Document is already in moderation.');
  }

  draft(document: TextDocument): void {
    console.log('Reverting document to draft.');
    document.setState(new DraftState());
  }
}

class PublishedState implements State {
  publish(document: TextDocument): void {
    console.log('Document is already published.');
  }

  moderate(document: TextDocument): void {
    console.log('Document is published and cannot be moderated.');
  }

  draft(document: TextDocument): void {
    console.log('Reverting document to draft.');
    document.setState(new DraftState());
  }
}

// Context class
class TextDocument {
  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  public setState(state: State): void {
    this.state = state;
  }

  public publish(): void {
    this.state.publish(this);
  }

  public moderate(): void {
    this.state.moderate(this);
  }

  public draft(): void {
    this.state.draft(this);
  }
}

// Usage
const document1 = new TextDocument(new DraftState());

document1.publish(); // Publishing the document...
document1.moderate(); // Document is in draft mode. It cannot be moderated.
document1.draft(); // Document is already in draft mode.

document1.setState(new ModerationState());
document1.moderate(); // Document is already in moderation.
document1.publish(); // Document is being published after moderation.
```

### Explanation of the implementation above

1. **State Interface**: Defines the methods that all states must implement.

2. **Concrete States**:

   - `DraftState`, `ModerationState`, and `PublishedState` implement the `State` interface and provide specific behaviors for their respective states.

3. **TextDocument Class**:

   - Holds a reference to the current state and delegates method calls to that state.
   - Allows changing its state via `setState()`.

4. **Usage**:
   - A `TextDocument` starts in the `DraftState`. Based on the state, different behaviors are executed when calling methods like `publish()`, `moderate()`, and `draft()`.

### Summary

The State pattern is a powerful way to manage complex state transitions and behaviors within an object. By encapsulating states into separate classes, you can enhance code maintainability and scalability, making it easier to manage behavior changes over time.
