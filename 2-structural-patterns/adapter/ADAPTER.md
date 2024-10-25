# ADAPTER PATTERN

## What is the Adapter design pattern?

The Adapter pattern is a structural design pattern that allows objects with incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces by wrapping an existing class with a new interface.

### Key Concepts of Adapter Pattern

1. **Target Interface**: This defines the interface that the client expects to work with.

2. **Client**: This is the class that interacts with the target interface.

3. **Adaptee**: This is the class with an incompatible interface that needs to be adapted.

4. **Adapter**: This class implements the target interface and translates the calls from the client to the methods of the adaptee.

### When to Use the Adapter Pattern

- When you want to use an existing class but its interface does not match the one you need.
- When you want to create a reusable class that can work with various interfaces.
- When you want to integrate new functionality into existing systems without changing their code.

### Example

Here is a simple example

#### Step 1: Define the Target Interface

This is the interface that the client expects to work with.

```typescript
interface ITarget {
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

This class will implement the ITarget interface and delegate calls to the Adaptee.

```typescript
class Adapter implements ITarget {
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

The client code can now use the ITarget interface without needing to know about the Adaptee.

```typescript
function clientCode(target: ITarget) {
  console.log(target.request());
}

// Usage
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

clientCode(adapter); // Output: Adapter: Specific request from Adaptee.
```

### Benefits of Using Adapter

- **Compatibility**: Enables integration of incompatible interfaces without changing existing code.
- **Reusability**: Allows existing code to be reused with new interfaces.
- **Decoupling**: Reduces dependencies between classes by introducing an adapter layer.

### Summary

The Adapter pattern is an essential design pattern that facilitates the integration of disparate systems and interfaces. By allowing objects with incompatible interfaces to work together, it promotes flexibility and reuse in software design. This pattern is particularly useful in scenarios where you want to adapt existing classes to new interfaces without altering their implementation.
