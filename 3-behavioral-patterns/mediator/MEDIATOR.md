# MEDIATOR PATTERN

## What is the mediator design pattern?

The Mediator design pattern is a behavioral design pattern that defines an object that acts as an intermediary between other objects to reduce the direct dependencies between them. Instead of objects referring to each other directly, they communicate via a mediator object. This helps in reducing the complexity of communication between objects and decouples the system.

### Key Concepts:

1. **Decoupling:** Without the mediator, objects would have to directly interact with each other. With the mediator, they only interact with the mediator, reducing direct dependencies.
2. **Centralized Communication:** The mediator centralizes the communication between components, making it easier to maintain, test, and modify.
3. **Reduced Complexity:** Instead of a network of interdependent components, a mediator facilitates interaction and reduces the number of direct relationships between the components.

### When to Use the Mediator Pattern:

- **When multiple objects interact with each other in a complex way.** Using a mediator will simplify the interaction by having a single object handle the communication.
- **When you want to reduce the dependencies between components.** A mediator allows components to interact indirectly.
- **When components should not be aware of each other’s existence.** The mediator can facilitate communication without the objects needing to know about each other directly.

### Structure of the Mediator Pattern:

- **Mediator:** This is an interface or an abstract class that defines the communication methods between components.
- **ConcreteMediator:** Implements the mediator interface and coordinates communication between the colleague objects.
- **Colleagues (Participants):** These are the components that communicate through the mediator, often having references to the mediator object.

### Example

Here is a simple example:

#### Step 1: Define the Mediator Interface

```typescript
// Mediator interface that defines the communication methods.
interface Mediator {
  sendMessage(message: string, colleague: Colleague): void;
}
```

#### Step 2: Define the Colleague Interface

```typescript
// Colleague interface represents a participant that communicates through the mediator
interface Colleague {
  receiveMessage(message: string): void;
}
```

#### Step 3: Create a Concrete Mediator

```typescript
class ConcreteMediator implements Mediator {
  private colleague1: Colleague;
  private colleague2: Colleague;

  // Registering colleagues to communicate with each other.
  setColleague1(colleague: Colleague): void {
    this.colleague1 = colleague;
  }

  setColleague2(colleague: Colleague): void {
    this.colleague2 = colleague;
  }

  // Method to facilitate communication between colleagues
  sendMessage(message: string, colleague: Colleague): void {
    if (colleague === this.colleague1) {
      this.colleague2.receiveMessage(message);
    } else {
      this.colleague1.receiveMessage(message);
    }
  }
}
```

#### Step 4: Create Concrete Colleagues (Participants)

```typescript
class Colleague1 implements Colleague {
  private mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  // Implement the receiveMessage method for Colleague1
  receiveMessage(message: string): void {
    console.log(`Colleague1 received message: ${message}`);
  }

  // Method for sending messages to other colleague through the mediator
  sendMessage(message: string): void {
    this.mediator.sendMessage(message, this);
  }
}

class Colleague2 implements Colleague {
  private mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  // Implement the receiveMessage method for Colleague2
  receiveMessage(message: string): void {
    console.log(`Colleague2 received message: ${message}`);
  }

  // Method for sending messages to other colleague through the mediator
  sendMessage(message: string): void {
    this.mediator.sendMessage(message, this);
  }
}
```

#### Step 5: Usage

```typescript
// Create the mediator instance
const mediator = new ConcreteMediator();

// Create colleague instances and pass the mediator to them
const colleague1 = new Colleague1(mediator);
const colleague2 = new Colleague2(mediator);

// Set the colleagues in the mediator
mediator.setColleague1(colleague1);
mediator.setColleague2(colleague2);

// Send a message from Colleague1 to Colleague2
colleague1.sendMessage('Hello from Colleague1');

// Send a message from Colleague2 to Colleague1
colleague2.sendMessage('Hello from Colleague2');
```

### Explanation of the above code

- **Mediator (ConcreteMediator)**: Handles the message passing between `Colleague1` and `Colleague2`. Instead of direct communication between the colleagues, they interact with each other through the mediator.
- **Colleague1 and Colleague2**: These classes represent the components or objects that need to communicate. They use the mediator to send and receive messages.

### Benefits of Mediator Pattern:

1. **Reduced Complexity**: By using a mediator, the direct interactions between objects are reduced, leading to lower complexity.
2. **Centralized Control**: The mediator centralizes the logic for communication, making it easier to modify or extend.
3. **Improved Maintainability**: Since the mediator controls communication, modifications to one component don't require changes to other components directly.
4. **Decoupling**: The objects (colleagues) are decoupled from each other and only interact through the mediator.

### Drawbacks of Mediator Pattern:

- **Single Point of Failure**: The mediator becomes a central point for communication. If the mediator is not designed properly, it could become overly complex and lead to a "God Object" anti-pattern.
- **Potential Performance Overhead**: If there are too many colleagues, the mediator can become a bottleneck.

### Summary

The core idea of the Mediator pattern is to promote loose coupling in communication between objects. It does this by introducing a mediator object that controls the interactions between a set of objects, reducing dependencies between the objects. The Mediator pattern is extremely useful for systems where components need to interact but should not be aware of each other's details. It helps simplify complex interaction patterns, leading to more maintainable and flexible code.
