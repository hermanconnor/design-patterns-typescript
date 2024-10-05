# PROXY PATTERN

## What is the Proxy design pattern?

The Proxy design pattern is a structural design pattern that provides an object representing another object. The proxy acts as an intermediary, controlling access to the target object, which can be useful for various purposes such as lazy loading, access control, logging, or monitoring.

### Key Concepts

1. **Proxy**: The class that implements the same interface as the real object and contains a reference to it. It can control access and add additional functionality.
2. **Real Subject**: The actual object that performs the operations and contains the core functionality.

3. **Client**: The class that interacts with the proxy rather than the real subject.

### Use Cases

- **Virtual Proxy**: Delays the creation of a resource until it's actually needed (lazy loading).
- **Protection Proxy**: Controls access to the real subject, allowing certain clients to access it while restricting others.
- **Caching Proxy**: Caches the results of expensive operations to optimize performance.

### Advantages

- **Control**: Provides a way to control access to the real object.
- **Lazy Loading**: Can delay instantiation of an object until it's needed.
- **Separation of Concerns**: Keeps the proxy logic separate from the core business logic.

### Disadvantages

- **Increased Complexity**: Adds an additional layer that may complicate the design.
- **Performance Overhead**: Can introduce additional latency, especially if the proxy performs additional operations.

### Example

Here is a simple example:

```typescript
interface ISubject {
  request(): number[];
}

class RealSubject implements ISubject {
  enormousData: number[];

  constructor() {
    // Hypothetical enormous amounts of data
    this.enormousData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Example of larger data
  }

  request() {
    return this.enormousData;
  }
}

class ProxySubject implements ISubject {
  enormousData: number[];
  realSubject: RealSubject;

  constructor() {
    this.enormousData = [];
    this.realSubject = new RealSubject();
  }

  request() {
    if (this.enormousData.length === 0) {
      console.log('pulling data from RealSubject');
      this.enormousData = this.realSubject.request();
      return this.enormousData;
    }
    console.log('pulling data from Proxy cache');
    return this.enormousData;
  }
}

// The Client
const PROXY_SUBJECT = new ProxySubject();
// Use the Subject. First time it will load the enormous amounts of data
console.log(PROXY_SUBJECT.request());
// Use the Subject again, but this time it retrieves it from the local cache
console.log(PROXY_SUBJECT.request());
```

### Example 2

Here is another simple example with steps:

1. **Define the Subject Interface**:

```typescript
interface Subject {
  request(): void;
}
```

2. **Create the Real Subject**:

```typescript
class RealSubject implements Subject {
  public request(): void {
    console.log('RealSubject: Handling request.');
  }
}
```

3. **Create the Proxy**:

```typescript
class Proxy implements Subject {
  private realSubject: RealSubject;

  constructor() {
    this.realSubject = new RealSubject();
  }

  public request(): void {
    console.log('Proxy: Checking access prior to firing a real request.');
    this.realSubject.request();
    console.log('Proxy: Logging the request.');
  }
}
```

4. **Client Code**:

```typescript
function clientCode(subject: Subject) {
  subject.request();
}

const proxy = new Proxy();
clientCode(proxy);
```

### Explanation of the above Code

- **Subject Interface**: Defines the common interface for both the real subject and the proxy.
- **RealSubject Class**: Implements the core functionality of the system.

- **Proxy Class**: Holds a reference to the `RealSubject` and implements the same interface. It can add additional logic, like access checks or logging, before or after calling the real subject's method.

- **Client Code**: Uses the `Subject` interface to interact with the proxy without needing to know about the real subject.

### Summary

The Proxy design pattern is a powerful tool for controlling access to objects and adding additional functionality without modifying the original object. It can be used in various scenarios, such as lazy loading, access control, and logging. You should consider using the Proxy pattern when you need a layer of control over how objects are accessed or when you want to add functionality without modifying the underlying object. It’s particularly effective when you want to enhance performance, manage access, or simplify interactions with complex objects.
