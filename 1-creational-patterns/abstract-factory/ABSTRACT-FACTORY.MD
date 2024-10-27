# ABSTRACT FACTORY PATTERN

## What is the Abstract Factory design pattern?

The Abstract Factory design pattern is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.

### Key Components:

1. **Abstract Factory**: An interface that declares methods for creating abstract products.

2. **Concrete Factory**: A class that implements the Abstract Factory interface and produces specific instances of products.

3. **Abstract Products**: Interfaces or abstract classes for a family of products (e.g., ProductA, ProductB).

4. **Concrete Products**: Classes that implement the abstract product interfaces, providing specific implementations.

### When to Use the Abstract Factory Pattern

- When a system needs to be independent of how its products are created, composed, and represented.
- When you want to provide a way to create families of related objects.
- When the specific types of products that need to be created can vary independently from the code that uses them.

### Example

Here's a simple example:

```ts
// Product interfaces
interface IButton {
  paint(): string;
}

interface ICheckbox {
  paint(): string;
}

// Concrete Products for Windows
class WindowsButton implements IButton {
  public paint(): string {
    return 'Rendering a Windows Button';
  }
}

class WindowsCheckbox implements ICheckbox {
  public paint(): string {
    return 'Rendering a Windows Checkbox';
  }
}

// Concrete Products for Mac
class MacButton implements IButton {
  public paint(): string {
    return 'Rendering a Mac Button';
  }
}

class MacCheckbox implements ICheckbox {
  public paint(): string {
    return 'Rendering a Mac Checkbox';
  }
}

// Abstract Factory
interface GUIFactory {
  createButton(): IButton;
  createCheckbox(): ICheckbox;
}

// Concrete Factories
class WindowsFactory implements GUIFactory {
  public createButton(): IButton {
    return new WindowsButton();
  }
  public createCheckbox(): ICheckbox {
    return new WindowsCheckbox();
  }
}

class MacFactory implements GUIFactory {
  public createButton(): IButton {
    return new MacButton();
  }
  public createCheckbox(): ICheckbox {
    return new MacCheckbox();
  }
}

// Client code
function clientCode(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  console.log(button.paint());
  console.log(checkbox.paint());
}

// Usage
const windowsFactory = new WindowsFactory();
clientCode(windowsFactory); // Renders Windows UI elements

const macFactory = new MacFactory();
clientCode(macFactory); // Renders Mac UI elements
```

### Explanation of the above code

1. **Product Interfaces**: `IButton` and `ICheckbox` define the interface for the products that will be created by the factories.
2. **Concrete Products**: `WindowsButton`, `WindowsCheckbox`, `MacButton`, and `MacCheckbox` are specific implementations of the product interfaces for different operating systems.
3. **Abstract Factory Interface**: `GUIFactory` defines the methods for creating products.
4. **Concrete Factories**: `WindowsFactory` and `MacFactory` implement the `GUIFactory` interface, providing the appropriate product instances for each platform.
5. **Client Code**: The `clientCode(factory: GUIFactory)` function uses the factory to create UI components without being concerned about their concrete implementations.

### Advantages

- Promotes consistent product families, ensuring compatibility among products.
- Decouples client code from the specific classes it uses, leading to easier maintenance and extension.
- Facilitates the introduction of new product families with minimal changes to existing code.

### Disadvantages

- Can introduce complexity due to the additional layers of abstraction.
- Might lead to a proliferation of classes, especially when many product families are involved.

### Summary

The Abstract Factory pattern is a powerful way to create families of related objects without specifying their concrete classes. It enhances code flexibility and maintainability by promoting loose coupling and encapsulation.
