# Interface Segregation Principle (ISP)

The **Interface Segregation Principle (ISP)** states that clients should not be forced to depend on interfaces they do not use. In other words, it's better to have many small, specific interfaces rather than one large, general-purpose interface. This principle encourages a design where interfaces are tailored to the needs of their clients, promoting more maintainable and understandable code.

### Key Concept

The goal of ISP is to reduce the impact of changes and to avoid bloated interfaces that force implementing classes to provide unnecessary methods. This results in more focused interfaces that are easier to work with.

### Example

#### Violating the ISP

Imagine we have a `MultiFunctionPrinter` interface that represents a printer capable of multiple functionalities:

```typescript
interface MultiFunctionPrinter {
  print(document: string): void;
  scan(document: string): void;
  fax(document: string): void;
}

class Printer implements MultiFunctionPrinter {
  print(document: string): void {
    console.log(`Printing: ${document}`);
  }

  scan(document: string): void {
    throw new Error('This printer cannot scan.');
  }

  fax(document: string): void {
    throw new Error('This printer cannot fax.');
  }
}

// Usage
const printer = new Printer();
printer.print('Document1'); // Outputs: Printing: Document1
// printer.scan("Document1"); // Throws error
```

In this example, the `Printer` class implements the `MultiFunctionPrinter` interface but does not support scanning and faxing. This violates the Interface Segregation Principle because the `Printer` class is forced to implement methods that it does not actually support.

### Following ISP

To adhere to the Interface Segregation Principle, we can break the `MultiFunctionPrinter` interface into smaller, more specific interfaces:

#### Refactoring to Follow ISP

```typescript
interface Printer {
  print(document: string): void;
}

interface Scanner {
  scan(document: string): void;
}

interface Fax {
  fax(document: string): void;
}

class BasicPrinter implements Printer {
  print(document: string): void {
    console.log(`Printing: ${document}`);
  }
}

class AllInOnePrinter implements Printer, Scanner, Fax {
  print(document: string): void {
    console.log(`Printing: ${document}`);
  }

  scan(document: string): void {
    console.log(`Scanning: ${document}`);
  }

  fax(document: string): void {
    console.log(`Faxing: ${document}`);
  }
}

// Usage
const basicPrinter = new BasicPrinter();
basicPrinter.print('Document1'); // Outputs: Printing: Document1

const allInOnePrinter = new AllInOnePrinter();
allInOnePrinter.print('Document2'); // Outputs: Printing: Document2
allInOnePrinter.scan('Document2'); // Outputs: Scanning: Document2
allInOnePrinter.fax('Document2'); // Outputs: Faxing: Document2
```

### Benefits of Following ISP

1. **Reduced Complexity**: Smaller, specific interfaces are easier to understand and implement.
2. **Flexibility**: Classes can implement only the interfaces relevant to them, leading to fewer dependencies.
3. **Easier Maintenance**: Changes in one interface do not impact unrelated classes, which makes the codebase easier to maintain.
4. **Better Adherence to SOLID Principles**: ISP works in harmony with the other SOLID principles, enhancing overall design quality.

By adhering to the Interface Segregation Principle, you create a more modular and adaptable codebase, making it easier to implement changes and adding new functionality without breaking existing code.
