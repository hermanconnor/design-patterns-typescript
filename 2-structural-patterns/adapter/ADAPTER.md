# Adapter Pattern

## What is the Adapter Pattern?

The Adapter pattern is a structural design pattern that allows objects with incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces by wrapping an existing class with a new interface.

### Key Concepts of the Adapter Pattern

1. **Intent**: Convert the interface of a class into another interface that clients expect. The Adapter lets classes work together that couldn’t otherwise because of incompatible interfaces.

2. **Participants**:
   - **Target**: The interface that the client expects.
   - **Adapter**: The class that implements the Target interface and translates calls to the Adaptee.
   - **Adaptee**: The class that needs to be adapted. It has an existing interface that doesn't match the Target interface.
   - **Client**: The class that uses the Target interface.

### EXAMPLE

The following is a simple example

```typescript
// Target interface
interface IA {
  methodA(): void;
}

// Class A that implements IA
class ClassA implements IA {
  methodA() {
    console.log('method A');
  }
}

// Another interface
interface IB {
  methodB(): void;
}

// Class B that implements IB
class ClassB implements IB {
  methodB() {
    console.log('method B');
  }
}

// Adapter for ClassB to adapt it to IA
class ClassBAdapter implements IA {
  private classB: ClassB;

  // Accepting ClassB instance through constructor
  constructor(classB: ClassB) {
    this.classB = classB;
  }

  // Adapting methodA to call methodB
  methodA() {
    console.log('Adapting to call ClassB methodB instead');
    this.classB.methodB();
  }
}

// The Client
// Using ClassA and ClassB without the adapter
const ITEMS = [new ClassA(), new ClassB()];
ITEMS.forEach((item) => {
  if ('methodB' in item) {
    // Checking if the item has methodB
    item.methodB();
  } else {
    item.methodA();
  }
});

// Using ClassA and the adapter for ClassB
const ADAPTED = [new ClassA(), new ClassBAdapter(new ClassB())];
ADAPTED.forEach((item) => {
  item.methodA(); // Now both can be treated uniformly
});
```

### Example 2

The following is another example with steps:

#### Step 1: Define the Target Interface

This is the interface that the client expects to work with.

```typescript
interface Target {
  request(): string;
}
```

#### Step 2: Create the Adaptee

This is the class with an incompatible interface.

```typescript
class Adaptee {
  specificRequest(): string {
    return 'Specific request from Adaptee.';
  }
}
```

#### Step 3: Implement the Adapter

This class will implement the Target interface and delegate calls to the Adaptee.

```typescript
class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  request(): string {
    // Translate the request to a specific request
    return `Adapter: ${this.adaptee.specificRequest()}`;
  }
}
```

#### Step 4: Client Code

The client code can now use the Target interface without needing to know about the Adaptee.

```typescript
function clientCode(target: Target) {
  console.log(target.request());
}

// Usage
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

clientCode(adapter); // Output: Adapter: Specific request from Adaptee.
```

### Use Cases

1. **Legacy code integration**: When you have legacy systems that need to interface with new systems.
2. **Third-party libraries**: When using third-party libraries that have different interfaces than your application.

### Tips for Using the Adapter Pattern

- Keep your Adapter classes focused on translating interfaces.
- Ensure that the Adapter is only concerned with adapting one specific type of Adaptee.
- Consider using a more generic Adapter if you have multiple Adaptees to avoid duplication.

### Summary

- **Advantages**:
  - Allows for greater flexibility and reusability of code.
  - Enables integration of new functionality without modifying existing code.
- **Disadvantages**:
  - Can introduce complexity if overused.
  - May require additional classes that could clutter the design.

```

```
