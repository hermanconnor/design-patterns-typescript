# Liskov Substitution Principle (LSP)

The **Liskov Substitution Principle (LSP)** states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. In simpler terms, if class `B` is a subclass of class `A`, then `B` should be able to stand in for `A` without causing any errors or unexpected behavior.

### Key Concept

The Liskov Substitution Principle emphasizes that subclasses must honor the expectations set by their parent class. This includes adhering to the behavior, methods, and properties of the superclass.

### Example

#### Violating the LSP

Consider the following base class and a subclass that violates the LSP:

```typescript
class Bird {
  fly(): void {
    console.log('Flying');
  }
}

class Sparrow extends Bird {
  // Sparrow can fly
}

class Ostrich extends Bird {
  fly(): void {
    throw new Error("Ostrich can't fly");
  }
}

// Usage
function makeBirdFly(bird: Bird) {
  bird.fly();
}

const sparrow = new Sparrow();
const ostrich = new Ostrich();

makeBirdFly(sparrow); // Outputs: Flying
makeBirdFly(ostrich); // Throws an error: Ostrich can't fly
```

In this example, the `Ostrich` class violates the LSP because it cannot be substituted for its superclass `Bird` without causing an error. This leads to unexpected behavior when using the `makeBirdFly` function.

### Following the LSP

To adhere to the Liskov Substitution Principle, we can redefine the relationship to ensure that all subclasses conform to the expectations set by the superclass.

#### Refactoring to Follow LSP

We can separate the flying behavior from the `Bird` class by using interfaces:

```typescript
interface Flyable {
  fly(): void;
}

class Bird {
  // Common bird properties can be defined here
}

class Sparrow extends Bird implements Flyable {
  fly(): void {
    console.log('Flying');
  }
}

class Ostrich extends Bird {
  // Ostrich does not implement Flyable
}

// Usage
function makeBirdFly(bird: Flyable) {
  bird.fly();
}

const sparrow = new Sparrow();
// const ostrich = new Ostrich(); // Ostrich cannot be used here

makeBirdFly(sparrow); // Outputs: Flying
```

In this refactored example, the `Sparrow` class implements the `Flyable` interface, while the `Ostrich` class does not. The `makeBirdFly` function now requires an object that implements the `Flyable` interface, thus preventing the use of `Ostrich` in this context and adhering to the Liskov Substitution Principle.

### Benefits of Following LSP

1. **Increased Code Reusability**: Properly designed subclasses can be reused in different contexts without modification.
2. **Improved Maintainability**: Changes to the superclass won't lead to issues in subclasses as long as they adhere to the expected behavior.
3. **Better Understanding of Relationships**: LSP helps clarify the relationships between classes, making the codebase easier to navigate and understand.

By adhering to the Liskov Substitution Principle, you create a more robust and flexible code structure that enhances code quality and reduces the likelihood of bugs when extending or modifying functionality.
