# Decorator Pattern

## What is the Decorator Pattern?

The Decorator Pattern is a structural design pattern that allows you to dynamically add behavior or responsibilities to objects without modifying their structure. This can be especially useful when you want to extend the functionality of classes in a flexible and reusable way.

### Key Concepts of the Decorator Pattern

1. **Component Interface**: This defines the interface for objects that can have responsibilities added to them.
2. **Concrete Component**: This is the class that implements the component interface.
3. **Decorator**: This class also implements the component interface and contains a reference to a component. It delegates the operations to the component and can add additional behavior.

### How It Works

The Decorator Pattern involves wrapping a concrete component with a decorator that extends its behavior. You can stack multiple decorators to layer on additional functionality.

### Example

Here is a simple example:

```typescript
interface IComponent {
  method(): string;
}

class Component implements IComponent {
  method(): string {
    return 'Component Method';
  }
}

abstract class BaseDecorator implements IComponent {
  protected component: IComponent;

  constructor(component: IComponent) {
    this.component = component;
  }

  abstract method(): string;
}

class TextDecorator extends BaseDecorator {
  method(): string {
    return `Decorator Method(${this.component.method()})`;
  }
}

// The Client
const component = new Component();
console.log(component.method());

const decorated = new TextDecorator(component);
console.log(decorated.method());

const decoratedAgain = new TextDecorator(decorated);
console.log(decoratedAgain.method());
```

### Benefits of the Decorator Pattern

1. **Flexibility**: You can add or remove decorators dynamically.
2. **Single Responsibility Principle**: Each class has one responsibility, which enhances maintainability.
3. **Avoids Class Explosion**: Instead of creating many subclasses for each combination of features, you can create decorators as needed.

### When to Use

- When you want to add responsibilities to individual objects dynamically and transparently, without affecting other objects.
- When extension by subclassing is impractical, as it can lead to an explosion of subclasses.

### Summary

The Decorator pattern allows you to extend the behavior of objects dynamically. You can add new functionalities by wrapping existing objects in decorators without modifying the original class. This pattern is particularly useful for adhering to the Open/Closed Principle, which states that classes should be open for extension but closed for modification.
